const { Router } = require('express')
const { Country, Activity } = require('../db.js')
const axios = require('axios')
const router = Router()

// POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos



router.post('/', async (req, res, next) => {
  let { name, difficulty, duration, season, countries } = req.body;
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

module.exports = router

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)
