const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
    title: String,
    partyA: String, // The person paying
    partyB: String, // The person receiving
    amount: Number,
    deadline: Date,
    status: { type: String, default: 'ACTIVE' }, // ACTIVE, FULFILLED, BREACHED
    penaltyAmount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Contract', contractSchema);