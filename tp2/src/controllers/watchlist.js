const {findOne} = require('../services/db/crud')
const{insertOne} = require('../services/db/crud')


async function createWatchlist(req, res, next) {
    try {
        if (await findOne('watchlist', req.body) == null) {
            let test = await insertOne('watchlist', req.body)
            return res.send(test)
        }
        else{
            return res.status(409).send('watchlist deja existante')
        }
    }catch (e) {
        console.log(`Erreur lors de l execution de la fonction createWatchlist`);
        console.log(e);
        throw e;
        
    }
}

async function findWatchlist(req, res, next) {
    try {
        let test = await findOne('watchlist', 
        return res.send(test)
        
    } catch (e) {

        console.log(`Erreur lors de l execution de la fonction findusers`);
        console.log(e);
        throw e;
        
    }
}


  
module.exports = {
      createWatchlist,
      findWatchlist
};