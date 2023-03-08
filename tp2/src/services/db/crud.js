const { getCollection } = require('./connection');


// fonction findOne
async  function  findOne(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.findOne(query, options);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

// fonction find
async  function  find(collectionName, query, options = {}) {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.find(query, options).toArray();
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction find avec les parametres suivants: ${query}`);
        console.log(e);
        throw e;
    }
}

// fonction insertOne
async  function  insertOne(collectionName, document) {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.insertOne(document);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction insertOne avec les parametres suivants: ${document}`);
        console.log(e);
        throw e;
    }
}


// fonction insertMany
async  function  insertMany(collectionName, documents) {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.insertMany(documents);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction insertMany avec les parametres suivants: ${documents}`);
        console.log(e);
        throw e;
    }
}


// fonction updateOne
async  function  updateOne(collectionName, query, document) {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.updateOne(query, document);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction updateOne avec les parametres suivants: ${query} et ${document}`);
        console.log(e);
        throw e;
    }
}


// fonction updateMany
async  function  updateMany(collectionName, query, document) {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.updateMany(query, document);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction updateMany avec les parametres suivants: ${query} et ${document}`);
        console.log(e);
        throw e;
    }
}


// fonction replace 
async  function  replace(collectionName, query, document) {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.replaceOne(query, document);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction replaceOne avec les parametres suivants: ${query} et ${document}`);
        console.log(e);
        throw e;
    }
}


// fonction deleteOne
async  function  deleteOne(collectionName, query) {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.deleteOne(query);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction deleteOne avec les parametres suivants: ${query}`);
        console.log(e);
        throw e;
    }
}


// fonction deleteMany
async  function  deleteMany(collectionName, query) {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.deleteMany(query);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction deleteMany avec les parametres suivants: ${query}`);
        console.log(e);
        throw e;
    }
}




module.exports = {findOne, find, insertOne, insertMany, updateOne, updateMany, replace, deleteOne, deleteMany};









