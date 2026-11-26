const express = require("express");

const app = express();

app.get("/" , (req, res) => {
    res.send ("Bienvenue sur le Port de Plaisance Russel");
});

app.get("/catways", (req, res) => {
    res.json([
        {
            catwayNumber: 1,
            catwayType: "long",
            catwayState: "Bon état"
        },
        {
            catwayNumber: 2,
            catwayType: "short",
            catwayState: "En réparation"
        }
    ]);
});

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
