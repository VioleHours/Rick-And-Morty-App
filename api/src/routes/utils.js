const { Character, Episodes } = require('../db.js');
const axios = require('axios');

async function getApiInfo() {
    const apiUrl = await axios.get('https://rickandmortyapi.com/api');
    const apiInfo = await apiUrl.data.map((c) => {
        return {
            id: c.id,
            name: c.name,
            status: c.status,
            gender: c.gender,
            specie: c.specie,
            origin: c.origin.name,
        }
    })
    const savedApiInfo = () => {
        apiInfo.map ( i => {
            Character.findOrCreate({
                where: {
                    name: i.name,
                    id: i.id,
                },
                defaults: {
                    status: i.status,
                    gender: i.gender,
                    specie: i.specie,
                    origin: i.origin.name,
                },
            }).catch((err) => { console.log(err) });
        })
    } 
    savedApiInfo();
    return apiInfo;
};

const getDbInfo = async () => {
    await getApiInfo();
    const aux = await Character.findAll({
        include: {
            model: Episodes, 
            attributes: ['name', 'air_date', 'episode'],
            through: {
                attributes: [],
            }
        }
    })
    return aux;
}

const getEpisodes = async () => {
    const get = await Episodes.findAll()
    return get;
}

module.exports = { getDbInfo, getEpisodes };