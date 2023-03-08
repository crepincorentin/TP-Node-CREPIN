const {findOne} = require('../services/db/crud')
const{insertOne} = require('../services/db/crud')


async function createItem(req, res, next) {
    try {
        if (await findOne('item', req.body) == null) {
            let test = await insertOne('item', req.body)
            return res.send(test)
        }
        else{
            return res.status(409).send('item deja existant')
        }
    }catch (e) {
        console.log(`Erreur lors de l execution de la fonction createitem`);
        console.log(e);
        throw e;
        
    }
}

async function findItem(req, res, next) {
    try {
        let test = await findOne('item', {title : 'Avatar'})
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findusers`);
        console.log(e);
        throw e;
        
    }
}


  
module.exports = {
      createItem,
      findItem
};

