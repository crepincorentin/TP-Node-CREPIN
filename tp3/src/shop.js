/**
 * @function
 * @param {number} id, id de l'utilisateur a rechercher
 * @param {Array} usersData, tableau contenant la liste des utilisateurs 
 * Retourne les données de l'utilisateur de la liste qui correpondant à l'id 
 */
function getUser(id, usersData) {
  if (!Number.isInteger(id) || id < 0) {
    throw new Error("L'identifiant doit être un entier positif");
  }

  // Liste des utilisateurs ne doit pas être vide
  if (usersData.length === 0) {
    throw new Error("La liste des utilisateur est vide");
  }

  // Liste des utilisateurs doit être un tableau
  if (!Array.isArray(usersData)) {
    throw new Error("La liste des utilisateur doit être un tableau contenant des utilisateurs");
  }

  // Renvoi une erreur si l'id n'existe pas
  if (!usersData.find((user) => user.id === id)) {
    throw new Error(`L'utilisateur ${id} n'existe pas!`);
  }


  return usersData.find((user) => user.id === id);

}

/**
 * @function
 * @param {Array} usersData, tableau contenant la liste des utilisateurs
 * Retourne la liste des numéros de téléphone des utilisateurs de plus de 50 ans
 */
function getPhoneNumbers(usersData) {
  // Liste des utilisateurs ne doit pas être vide
  if (usersData.length === 0) {
    throw new Error("La liste des numéros de téléphone est vide");
  }

  // Liste des utilisateurs doit être un tableau
  if (!Array.isArray(usersData)) {
    throw new Error("La liste des utilisateur doit être un tableau contenant des utilisateurs");
  }

  return usersData
    .filter((user) => user.age >= 50)
    .map((user) => user.phone);
}





module.exports = {
  getUser,
  getPhoneNumbers,
};
