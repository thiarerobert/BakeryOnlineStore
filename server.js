// Aller chercher les configurations de l'application
import 'dotenv/config';

// Importer les fichiers et librairies
import express, { json, response, urlencoded } from 'express';
import expressHandlebars from 'express-handlebars';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import cspOption from './csp-options.js';
import './model/connetion.js';
import { getMenu } from './model/menu.js';

// Création du serveur
const app = express();
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

// Ajout de middlewares
app.use(helmet(cspOption));
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static('public'));

// Ajouter les routes ici ...
app.get('/', (request, response) => {
    response.render('home', {
        title: 'Accueil',
    });
});

//Route pour afficher les menus 
app.get('/menu', async (request, response) => {
    let menu = await getMenu();
    response.render('menu', {
        title: "Menu",
        items: menu,
        styles: ['/css/menu.css'],
        scripts: ['/js/main.js']
    });
});

//Route pour afficher le menu selon son id
app.patch('/produit', (request, response) => {

});
// Renvoyer une erreur 404 pour les routes non définies
app.use(function (request, response) {
    // Renvoyer simplement une chaîne de caractère indiquant que la page n'existe pas
    response.status(404).send(request.originalUrl + ' not found.');
});

// Démarrage du serveur
app.listen(process.env.PORT);
console.info(`Serveurs démarré:`);
console.info(`http://localhost:${ process.env.PORT }`);
