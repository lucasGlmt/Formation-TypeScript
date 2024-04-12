import "reflect-metadata";
import express from 'express';
import { AppDataSource } from './app-datasource';

// Initialisation d'express
const app = express();

// Connexion à la BDD
AppDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));


// Déclaration des routes
app.get('/', (req, res) => {
    res.json({ message: "Hello World !" });
});


// Ecoute sur le port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on port :${PORT}`));