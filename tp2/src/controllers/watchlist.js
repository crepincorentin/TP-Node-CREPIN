// Description: Ce fichier contient les fonctions qui permettent de gérer les watchlist


const crud = require('../services/db/crud')


// ----------------------------------------------------------------------------------------------


// Fonction qui crée une watchlist pour un utilisateur
async function createWatchlist(req, res, next) {
    try {
        if (typeof req.body.id_users !== 'number' || typeof req.body.id_item !== 'number') {
            return res.status(400).send('Veuillez saisir un nombre');
        }
        else {
            console.log('ok');
        }
        let test = await crud.insertOne('watchlist', req.body)
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction createWatchlist`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui recherche une watchlist pour un utilisateur
async function findWatchlist(req, res, next) {
    try {
        let id = req.params.id;
        let test = await crud.findOne('watchlist', {"id_item" : id})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction findWatchlist`);
        console.log(e);
        throw e;
    }   
}


// ----------------------------------------------------------------------------------------------


// Fonction qui recherche toutes les watchlist pour un utilisateur
async function findAllWatchlist(req, res, next) {
    try {
        let id = req.params.id;
        let test = await crud.find('watchlist', {"id_users" : id})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction findWatchlist`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui ajoute un item à une watchlist
async function addItemToWatchlist(req, res, next) {
    try {
        let test = await crud.insertOne('watchlist', req.body)
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction addItemToWatchlist`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui modifie le statut d'un item d'une watchlist
async function updateItemStatus(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.updateOne('watchlist', {"id_item" : id },{$set: { "status": req.body.status, "id_users": req.body.id_users, "id_item": req.body.id_item }})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction updateItemStatus`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui recherche le contenu d'une watchlist
async function findWatchlistContent(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.findOne('watchlist', {"id_item" : id})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction findWatchlistContent`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui supprime une watchlist

async function deletewatchlist(req, res) {
    try {
        let nom = req.params.nom;
        let test = await crud.deleteOne('watchlist', {"name" : nom})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui ajoute une note à un item d'une watchlist
async function notewatchlist(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.updateOne('watchlist', {"id_item" : id },{$set: { "note": req.body.note }})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction notewatchlist`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui permet de partager sa watchlist avec un autre utilisateur
async function sharewatchlist(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.updateOne('watchlist', {"id_item" : id },{$set: { "id_users": req.body.id_users }})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction sharewatchlist`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui permet d'ajouter une watchlist en favoris
async function addfavoris(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.updateOne('watchlist', {"id_item" : id },{$set: { "favoris": req.body.favoris }})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction addfavoris`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Export des fonctions
module.exports = {
      createWatchlist,
      findWatchlist,
      addItemToWatchlist,
      updateItemStatus,
      findAllWatchlist,
      findWatchlistContent,
      deletewatchlist,
      notewatchlist,
      sharewatchlist,
      addfavoris
};


// ----------------------------------------------------------------------------------------------