const { Router } = require('express')
const { Country, Activity } = require('../db.js')
const axios = require('axios')
const router = Router()

// router.post('/', async function (req,res){
//     const {
//         id,
//         name,
//         difficulty,
//         duration,
//         season,         
        
//     } = req.body;

//      try{
//         const actCreated = await Activity.create({
//             name,
//             season,
//             duration,
//             difficulty,
//         })

//         if(id){
//          actCreated.addCountry(id)
//         }
//         res.send(actCreated) 
        
//     }
//     catch(err){
//         console.log(err)
//     }
// })

// router.get('/', async function (req, res){
//     const act = await dataDbActivity()
//     console.log(act)
//     res.status(200).send(act)
// })


// router.get('/', (req, res) => {
// 	return Activity.findAll()
// 	.then((activities) => {
// 		return res.json(activities);
// 	})
// 	.catch((err) => next(err));
// })

module.exports = router
