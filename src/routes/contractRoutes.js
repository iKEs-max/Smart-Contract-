const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');

router.post('/', contractController.createContract);
router.get('/', contractController.getContracts);

module.exports = router;