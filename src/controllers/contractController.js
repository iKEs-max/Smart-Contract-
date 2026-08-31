const Contract = require('../models/Contract');
const checkContractStatus = require('../utils/legalLogic');

// Create a new contract
exports.createContract = async (req, res) => {
    try {
        const { title, partyA, partyB, amount, deadline } = req.body;
        const newContract = new Contract({ title, partyA, partyB, amount, deadline });
        await newContract.save();
        res.status(201).json({ message: 'Contract created and signed!', contract: newContract });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create contract' });
    }
};

// Get all contracts and check their legal status
exports.getContracts = async (req, res) => {
    try {
        const contracts = await Contract.find();
        
        // Run the legal logic on every contract before sending it back
        const updatedContracts = contracts.map(c => {
            checkContractStatus(c);
            c.save(); // Save updated status (e.g., BREACHED) to DB
            return c;
        });

        res.json(updatedContracts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contracts' });
    }
};