/* Připojení modulu frameworku Express */
const express = require("express"); /* Vytvoření základního objektu serverové aplikace */
const app = express(); /* Nastavení portu, na němž bude spuštěný server naslouchat */
const port = 3000; /* Spuštění webového serveru */
/* Připojení externího modulu body-parser (https://www.npmjs.com/package/body-parser) -middleware pro parsování těla požadavku */
constbodyParser = require("body-parser"); /* Připojení externího modulu moment (https://momentjs.com/) -knihovna pro formátování datových a časových údajů */
constmoment = require("moment"); /* Připojení vestavěných modulů fs (práce se soubory) a path (cesty v adresářové struktuře) */
constfs = require("fs");
constpath = require("path");
app.use(express.static("public"));
app.listen(port, () => {
    console.log(`Server naslouchá na portu ${port}`);
});