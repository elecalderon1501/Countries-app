const { Router } = require('express')
const { Country, Activity } = require('../db.js')
const axios = require('axios')
const router = Router()

// POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

router.post('/', async (req, res) => {
  let { name, difficulty, duration, season, countries } = req.body
  let activityCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  })

  let countriesDb = await Country.findAll({
    where: { name: countries },
    attribute: [],
  })
  activityCreated.addCountry(countriesDb)
  res.send('Country added')
})


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
