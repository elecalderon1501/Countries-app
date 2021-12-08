const { Router } = require('express')
const axios = require('axios')
const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const router = Router()

// GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.

router.get('/', async (req, res, next) => {
  let { name } = req.query
  try {
    if (name) {
      let nameCountries = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: Activity,
      })
      console.log(name)
      console.log(nameCountries)
      res.json(nameCountries)
    } else {
      let allCountries = await Country.findAll({
        include: Activity,
      })
      res.json(allCountries)
    }
  } catch (error) {
    next(error)
  }
})

// GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

// model.findOne({
//   order: [ [ 'id', 'DESC' ]],
//   });

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const countriesId = await Country.findByPk(id, {
      include: {
        model: Activity,
      },
    })
    console.log(countriesId)
    res.json(countriesId)
  } catch (error) {
    next(error)
  }
})

module.exports = router
