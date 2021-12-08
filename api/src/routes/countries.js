const { Router } = require('express')
const axios = require('axios')
const { Country, Activity, Op } = require('../db')

const router = Router()

// GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.

router.get('/', async (req, res, next) => {
  const { name } = req.query
  if (name) {
    let nameCountries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: '%' + name + '%',
        },
        include: {
          model: Activity,
        },
      },
    })
    res.json(nameCountries)
  } 
  else {
    let allCountries = await Country.findAll({
      include: {
        model: Activity,
      },
    })
    res.json(allCountries)
  }
})

// GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes



module.exports = router
