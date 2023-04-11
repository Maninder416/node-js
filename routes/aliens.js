const express= require('express')
const router = express.Router()
const Alien = require('../model/alien')
const e = require('express')
const alien = require('../model/alien')

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

router.patch('/:id',async(request, response) => {
    try{
        const alien = await Alien.findById(request.params.id);
        alien.sub = request.body.sub;
        const temp = await alien.save();
        response.status(201).send(temp);

    }catch(err){
        response.send(err);
    }
})

// router.put("/:id",(req, res)=>{
//     Alien.findByIdAndUpdate(req.params.id,req.body.Alien,function(err,updatedata){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(updatedata)
//         }
//     })
// })

router.put('/:id',async(request, response)=>{
    try{
        console.log("***** put method calling *****")
        const alien = await Alien.findById(request.params.id);
        alien.name = request.body.name;
        alien.tech = request.body.tech;
        alien.sub = request.body.sub;
        const temp = await alien.save();
        response.status(201).send(temp);

    }catch(err){
        response.send(err);
    }
})

module.exports = router


