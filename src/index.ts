import express from 'express';

// Initialisation d'express
const app = express();


// Déclaration des routes
app.get('/', (req, res) => {
    res.json({ message: "Hello World !" });
});


// Ecoute sur le port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on port :${PORT}`));