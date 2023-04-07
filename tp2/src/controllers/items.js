// Description: Ce fichier contient les fonctions qui permettent de gérer les items


const crud = require('../services/db/crud')


// ----------------------------------------------------------------------------------------------


// Fonction qui ajouter un item au registre
async function addItem(req, res, next) {
    try {
        let test = await crud.insertOne('item', req.body)
        return res.send(test)

    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction addItem`);
        console.log(e);
        throw e;
        
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui recherche un item dans le registre avec un filtre sur le nom 
async function findItem(req, res) {
    try {
        let nom = req.params.nom;
        let test = await crud.find('item', {"name" : nom})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui supprime un item 
async function deleteItem(req, res) {
    try {
        let nom = req.params.nom;
        let test = await crud.deleteOne('item', {"name" : nom})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui supprime plusieurs item avec le même nom
async function deleteItemMany(req, res) {
    try {
        let nom = req.params.nom;
        let test = await crud.deleteMany('item', {"name" : nom})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction qui affiche tous les items
async function findallItem(req, res) {
    try {
        let test = await crud.find('item', {})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Exportation des fonctions
module.exports = {
    findItem,
    addItem,
    deleteItem,
    deleteItemMany,
    findallItem
};


// ----------------------------------------------------------------------------------------------