const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to Smart Contract DB!'))
    .catch(err => console.log('Database error:', err));

app.use('/api/contracts', require('./routes/contractRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Smart Contract API running on port ${PORT}`);
});