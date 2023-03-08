const express = require('express');
const router = express.Router();
const {createUser, findUser, findUsermany, updateUser } = require ('../controllers/users.js');


// --------------------------------------------

router.post("/create", createUser);
router.get("/create/findone/:nom", findUser);
router.get("/create/find/", findUsermany);
router.post("/create/update/:nom", updateUser);

// --------------------------------------------



module.exports = router;