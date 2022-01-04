const { Router } = require('express')
const { Country, Activity } = require('../db.js')
const axios = require('axios')
const router = Router()

// POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

router.post('/', async (req, res, next) => {
  let { name, difficulty, duration, season, countries } = req.body
  //creo la actividad con los datos recibidos
  let activityCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  })

  //busco el pais que me pasaron por body
  let countriesDb = await Country.findAll({
    where: { name: countries },
    attribute: [],
  })
  //agrego el pais a la actividad
  activityCreated.addCountry(countriesDb)
  res.send('Country added')
})

// const [user, created] = await User.findOrCreate({
//   where: { username: 'sdepold' },
//   defaults: {
//     job: 'Technical Lead JavaScript'
//   }
// });
// console.log(user.username); // 'sdepold'
// console.log(user.job); // This may or may not be 'Technical Lead JavaScript'
// console.log(created); // The boolean indicating whether this instance was just created
// if (created) {
//   console.log(user.job); // This will certainly be 'Technical Lead JavaScript'
// }

router.get('/', async (req, res, next) => {
  try {
    let allActivity = await Activity.findAll()
    console.log(allActivity)
    res.json(allActivity)
  } catch (error) {
    next(error)
  }
})

module.exports = router

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)
