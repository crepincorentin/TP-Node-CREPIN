// Description : Fichier de routage pour les watchlist

// ----------------------------------------------------------------------------------------------


const express = require('express');
const router = express.Router();
const { createWatchlist, findWatchlist, addItemToWatchlist, updateItemStatus, 
    findWatchlistmany, findWatchlistContent, deletewatchlist, notewatchlist } = require('../controllers/watchlist.js');


// ----------------------------------------------------------------------------------------------


router.post("/watchlist", createWatchlist);
router.get("/watchlist/find/:id", findWatchlist);
router.post("/watchlist/add", addItemToWatchlist);
router.post("/watchlist/update/:id", updateItemStatus);
router.get("/watchlist/find/", findWatchlistmany);
router.get("/watchlist/findcontent/:id", findWatchlistContent);
router.get("/watchlist/delete/:id", deletewatchlist);
router.post("/watchlist/note/:id", notewatchlist);


// ----------------------------------------------------------------------------------------------


module.exports = router;