// Description: Fichier de routage pour les items


// ----------------------------------------------------------------------------------------------


const express = require('express');
const router = express.Router();
const {addItem, findItem, deleteItem, deleteItemMany  } = require ('../controllers/items.js');


// ----------------------------------------------------------------------------------------------


router.post("/add", addItem);
router.get("/add/find/:nom", findItem);
router.get("/add/delete/:nom", deleteItem);
router.get("/add/deletemany/:nom", deleteItemMany);


// ----------------------------------------------------------------------------------------------

module.exports = router;


