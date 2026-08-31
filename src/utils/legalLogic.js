// Legal Logic: If deadline has passed and amount isn't paid, apply penalty
function checkContractStatus(contract) {
    const now = new Date();
    
    if (contract.status === 'ACTIVE' && now > contract.deadline) {
        contract.status = 'BREACHED';
        // Legal Penalty: 10% of the original amount
        contract.penaltyAmount = Math.floor(contract.amount * 0.10); 
    }
    return contract;
}

module.exports = checkContractStatus;