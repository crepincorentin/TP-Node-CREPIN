const {findOne} = require('../services/db/crud')
const{insertOne} = require('../services/db/crud')



async function findUser(req, res, next) {
    try {
        let test = await findOne('users', {name : 'corentin'})
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findusers`);
        console.log(e);
        throw e;
        
    }
}


async function createUser(req, res, next) {
    try {
        if (await findOne('users', req.body) == null) {
            let test = await insertOne('users', req.body)
            return res.send(test)
        }
        else{
            return res.send('utilisateur deja existant')
        }

    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction createuser`);
        console.log(e);
        throw e;
        
    }
}






        

  
module.exports = {
      createUser,
      findUser
};





