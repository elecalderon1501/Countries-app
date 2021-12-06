const { Router } = require ('express');
const axios = require ('axios');
const { Country, Activity, Op } = require('../db');

const router = Router();


// const getApiInfo = async () => {
//     const { data } = await ('https://restcountries.com/v3.1/all');
//     const api = await data.map (el =>{
//         return{
//             id: el.cca3,
//             name: el.name.common,
//             flags: el.flags[0],
//             continent: el.continents,
//            capital: el.capital?.[0] ,
//            area:el.area,
//            population: el.population,
//         }
//     });
//     const result = await Country.bulkCreate(api)
//     return result;
// }

// const dataDb = async() => {
//     return await Country.findAll({
//         include: {
//             model: Activity,
//             attribute: ['name', 'difficulty', 'duration', 'season'],
//             through: {
//                 attributes: []
//             }
//         }
//     })
// }

// const dataDbActivity = async () => {
//     return await Activity.findAll({
//         include: Country
//     })
// }



// router.get("/", async function (req, res){
//     const {name} = req.query;
//     // let countries;
//     // const countryDB = await Country.count(); 
//     // countries = countryDB === 0 ?
//     // await getApiInfo() :
//     // await getDbInfo() 
// if ( name ) {
//     let countries = await Country.findAll({
//         where:{
//             name:{
//                 [Op.iLike]: '%' + name + '%',
//             },
//         },
//         include: {
//             model: Activity,
//         }
//     })
//     res.status(200).json(countries)
    
// }  else {
//    res.status(200).json(countries)  
// }
// })

// router.get('/', async)

// router.get('/', (req, res, next) => {
//     let { name } = req.query;
//     if (name) {
//         return Country.findAll({
//             where: { name: { [Op.iLike]: `%${name}`}},
//             include: {
//                 model: Activity,
//             }
//         });
//     } else {
//         res.status(200).json(countries);
//     }
    
// });


module.exports = router;