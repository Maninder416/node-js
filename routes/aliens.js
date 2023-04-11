const express= require('express')
const router = express.Router()
const Alien = require('../model/alien')
const e = require('express')
// const alien = require('../model/alien')

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
        if(alien!=null){
        response.status(200).send(alien);
        }
        response.json("Alien not found for id: " +request.params.id);
        
    } catch(err){
        response.send("Error: " + err);
    }
    
    
})

router.patch('/:id',async(request, response) => {
    try{
        const alien = await Alien.findById(request.params.id);
        alien.sub = request.body.sub;
        const temp = await alien.save();
        response.status(200).send(temp);

    }catch(err){
        response.send(err);
    }
})

router.put('/:id',async(request, response)=>{
    try{
        console.log("***** put method calling *****")
        const alien = await Alien.findById(request.params.id);
        alien.name = request.body.name;
        alien.tech = request.body.tech;
        alien.sub = request.body.sub;
        const temp = await alien.save();
        response.status(200).send(temp);

    }catch(err){
        response.send(err);
    }
})

router.delete('/:id', async(request, response) => {
    try{
    const temp = await Alien.findByIdAndDelete(request.params.id);
    if(temp != null){
        response.json("***** Data deleted successfully. ******")
    }else{
        response.json("****** Alien not found for id: *****: " +request.params.id);
    }
    
    }
    catch(err){
        response.send(err);
    
    }

})

module.exports = router


