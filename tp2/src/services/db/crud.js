// Description: Ce fichier contient les fonctions CRUD pour la base de données

// ----------------------------------------------------------------------------------------------


// Fonction Find one
const { getCollection } = require('./connection');

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


// ----------------------------------------------------------------------------------------------


// Fonction Find all 
async  function  find(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.find(query, options).toArray();
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findAll avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}


// ----------------------------------------------------------------------------------------------


// Fonction insertOne
async  function  insertOne(collectionName, document) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.insertOne(document);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertOne avec les parametres suivants: ${document}`);
		console.log(e);
		throw  e;
	}
}


// ----------------------------------------------------------------------------------------------


// Fonction insertMany
async  function  insertMany(collectionName, documents) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.insertMany(documents);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertMany avec les parametres suivants: ${documents}`);
		console.log(e);
		throw  e;
	}
}


// ----------------------------------------------------------------------------------------------


// Fonction updateOne
async  function  updateOne(collectionName, query, document) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.updateOne(query, document);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


// ----------------------------------------------------------------------------------------------


// Fonction updateMany
async  function  updateMany(collectionName, query, document) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.updateMany(query, document);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


// ----------------------------------------------------------------------------------------------


// Fonction replace
async  function  replace(collectionName, query, document) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.replaceOne(query, document);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction replace avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


// ----------------------------------------------------------------------------------------------


// Fonction deleteOne
async  function  deleteOne(collectionName, query) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.deleteOne(query);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


// ----------------------------------------------------------------------------------------------


// Fonction deleteMany
async  function  deleteMany(collectionName, query) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.deleteMany(query);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


// ----------------------------------------------------------------------------------------------


// Export des fonctions
module.exports = {findOne,
	 insertOne,
	 insertMany,
	 updateOne,
	 updateMany,
	 replace,
	 deleteOne,
	 deleteMany,
	 find};


// ----------------------------------------------------------------------------------------------