
const router = require("express").Router();
const db = require ("../models")

router.get("/api/workouts",function(req,res){
    db.Workout.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

router.put("/api/workouts/:id", (req, res)=>{
    var id = req.params.id;

    db.Workout.findByIdAndUpdate (
        { _id: id },
        { $push: { exercises: req.body }}
    )
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
    .then (data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router
