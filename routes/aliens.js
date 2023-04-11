const express= require('express')
const router = express.Router()
const Alien = require('../model/alien')
const e = require('express')

router.get('/', async(request, response) => {
    try{
        const alien = await Alien.find()
        response.status(200).json(alien);
        
    }catch(err){
        response.send("Error: "+err)
    }
})

router.post('/', async(request, response)=>{
    console.log("post request")
    const alien = new Alien(request.body);
    try{
       const a1 = await alien.save();
       response.json(a1);

    }catch(err){
        console.log("Error is: "+err);
    }

})

router.get('/:id', async(request, response) => {
    try{
        const alien = await Alien.findById(request.params.id);
        response.status(200).send(alien);
        
    } catch(err){
        response.send("Error: " + err);
    }
    
    
})

module.exports = router


