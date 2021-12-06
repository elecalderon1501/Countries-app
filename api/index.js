//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js')
const { conn, Country, Activity } = require('./src/db.js')
const axios = require('axios')
const { map } = require('./src/app.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  const preLoadData = await Country.findAll()
  if (preLoadData.length < 1) {
    const getApiData = await axios.get('https://restcountries.com/v3.1/all')
    const dataCountries = getApiData.data?.map(el => {
      return {
        id: el.cca3,
        name: el.name.common,
        flags: el.flags[0] ? el.flags[0] : ' ', //el.flags.svg ???
        continent: el.continents,
        capital: el.capital ? el.capital : ' ',
        subregion: el.subregion,
        area: el.area,
        population: el.population,
      }
    })
    const dataLoad = await Country.bulkCreate(dataCountries)
    console.log(dataLoad)
  }

  server.listen(3001, () => {
    console.log('%s listening at 3001') // eslint-disable-line no-console
  })
})
// País con las siguientes propiedades:
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población
