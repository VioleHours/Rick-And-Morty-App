require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME
} = process.env; 

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false,
    native: false,
}); 

const basename = path.basename(__filename);

const modelDefiners = [];

//lee todos los archivos de la carpeta Models, los requiere y los agrega al modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filtro((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => { 
        modelDefiners.push(require(path.join(__dirname, '/models', file)))
});

//Agarra la conexion (sequelize) para todos los modelos
modelDefiners.forEach(model => model(sequelize));
//'Capitalizar' los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models)
let capEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capEntries);

//En sequelize.models tenemos todos los modelos importados como propiedades...
// Hay que relacionarlos con destructuring
const { Character, Episodes } = sequelize.models;

// y para hacer las relaciones son:
// ....vemos que relacion tiene  || Muchos a muchos || uno a muchos || uno a uno
// tatata.hasMany(tatata)
// tatata.belongsToMany(tatata, { through : 'tatata_tatata' })
Character.belongsToMany(Episodes, { through : 'Character_Episodes' });
Episodes.belongsToMany(Character, { through : 'Character_Episodes' });

module.exports = {
    ...sequelize.models, // para poder hacer destructuring
    conn: sequelize, // para importar la conexión con destructuring
};
