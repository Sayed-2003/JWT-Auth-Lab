const router = require("express").Router();
const verifyToken = require('../middleware/verifyToken')
const Entry = require('../models/Entry')

router.post('/', verifyToken, async (req, res) => {
    try {
        const { title, entryBody, isPublic } = req.body

        const newEntry = await Entry.create({
            title: title,
            entryBody: entryBody,
            isPublic: isPublic,
            owner: req.user._id
        });

        res.status(201).json(newEntry)

    } catch (err) {
        console.log(err)
    }
})

router.get('/',verifyToken,async (req,res) => {
    try{
        const foundEntry = await Entry.find({isPublic:true},{isDeleted:false})

        res.status(200).json(foundEntry)
    }catch(err){
        console.log(err)
    }
})

router.get('/my-entries',verifyToken,async(req,res)=>{
    try{
        const foundEntry = await Entry.find({owner:req.user._id})
        res.status(200).json(foundEntry)
    }catch(err){
        console.log(err)
    }
})

router.put('/edit/:id',verifyToken,async (req,res) => {
    try{
        const { title, entryBody, isPublic } = req.body
        const updateEntry = { title, entryBody, isPublic }
        const {id} = req.params
        const updatedEntry = await Entry.findByIdAndUpdate(id,updateEntry,{new:true})

        res.status(200).json(updatedEntry)
    }catch(err){
        console.log(err)
    }
})

router.delete('/:id',verifyToken,async(req,res)=>{
    try{
        const deletedEntry = await Entry.updateOne({_id:req.params.id,owner:req.user._id},{isDeleted:true},{new:true})
        res.status(200).json(deletedEntry)
    }catch(err){
        console.log(err)
    }
})



module.exports = router;
