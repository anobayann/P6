const express = require('express'); // pour importer express(framework de node)

const app = express(); // pour cree l app express

app.use((req, res, next) => { //middleware (recoit requete, renvoi reponse et next)
    console.log('Requête reçue !');
    next();
  });
  
  app.use((req, res, next) => {
    res.status(201);
    next();
  });
  
  app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    next();
  });
  
  app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
  });





/*app.use((req, res) => {    // reponse du server
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });*/

module.exports = app; // l exporter pour y acceder depuis d'autres fichier 