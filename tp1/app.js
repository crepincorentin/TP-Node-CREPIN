const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Créez une route GET /welcome qui affiche le message "Bienvenue sur le TP 1 du cours d'architecture logicielle".
app.get('/welcome', (req, res) => {
  res.send("Bienvenue sur le TP 1 du cours d'architecture logicielle")
})

// Créez une route GET /secret qui retourne un code HTTP 401 et le message "Vous ne possédez pas les droits pour accéder à ma page secrète"
app.get('/secret', (req, res) => {
    res.status(401).send("Vous ne possédez pas les droits pour accéder à ma page secrète")
})

// Créez une route GET /error qui retourne une code HTTP 500 avec un json contenant une propriété message
app.get('/error', (req, res) => {
    res.status(500).send({json : "Vous ne possédez pas les droits pour accéder à ma page secrète"})
})

// Créez une route GET /img qui permet de télécharger l'image de votre choix.
app.get('/img', (req, res) => {
    res.sendFile(__dirname + '/img.jpg')
})

// Créez une route GET /redirectMe qui redirige l'utilisateur vers le site de l'IUT.
app.get('/redirectMe', (req, res) => {
    res.redirect('https://www.iut-littoral.fr/')
})

// Créez une route GET /users/:name qui affiche le message "Bienvenue sur la page de" suivi de la valeur du paramètre "name".

app.get('/users/:name', (req, res) => {
    res.send("Bienvenue sur la page de " + req.params.name)
})

// Créez une route GET /somme qui prend deux query params 'a' et 'b' et qui affiche le résultat de la somme entre a et b.
app.get('/somme/', (req, res) => {
    res.send("Le résultat de la somme est " + (parseInt(req.param("a")) + parseInt(req.param("b"))))
})



// A l'aide de app.use, afficher la route ainsi que l'heure d'appel de la route
app.use(function (req, res, next) {
    console.log(req.url, new Date().toLocaleTimeString())
    next()
})

// A l'aide de app.use, faites en sorte que tous les appels vers une route non supportée par notre API reçoivent un code HTTP 404 avec les message "Cette page n'existe pas!"
app.use(function (req, res, next) {
    res.status(404).send("Cette page n'existe pas!")
})


const metrics = {
    requestsCount: {},
    status: "healthy",
};
  
app.get("/metrics", function (req, res, next) {
    metrics.uptime = `${process.uptime().toFixed(2)} seconds`;
    return res.json(metrics);  
});
  
app.use(function (req, res, next) {
    const currentUrlRequestsCount = metrics.requestsCount[req.url];
    metrics.requestsCount[req.url] = currentUrlRequestsCount
      ? currentUrlRequestsCount + 1
      : 1;
    return next();
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})









