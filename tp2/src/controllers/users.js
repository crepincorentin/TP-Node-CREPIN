// Description: Fichier contenant les fonctions de gestion des utilisateurs


const crud = require('../services/db/crud')


// ----------------------------------------------------------------------------------------------


// Fonction de création d'un utilisateur
async function createUser(req, res, next) {
    try {
        let test = await crud.insertOne('users', req.body)
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction createUser`);
        console.log(e);
        throw e;
        
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction de recherche d'un utilisateur avec son nom
async function findUser(req, res, next) {
    try {
        let nom = req.params.nom;
        let test = await crud.findOne('users', {"name" : nom})
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findUser`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction de recherche de tous les utilisateurs
async function findUsermany(req, res) {
    try {
        let nom = req.params.nom;
        let test = await crud.find('users')
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findUser`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Fonction de mise à jour d'un utilisateur
async function updateUser(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.updateOne('users', {"id_item" : id },{$set: { "id_item": req.body.id_item}})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction updateItemStatus`);
        console.log(e);
        throw e;
    }
}


// ----------------------------------------------------------------------------------------------


// Export des fonctions
module.exports = {
    createUser,
    findUser,
    findUsermany,
    updateUser
};


// ----------------------------------------------------------------------------------------------