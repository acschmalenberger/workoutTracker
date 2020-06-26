
var router = require("express").Router();
const db = require ("/models")

// app.get("/api/workouts")

router.put("/api/workouts/:id", (req, res)=>{
    console.log(req.body)
    console.log(req.params.id)
})

// app.post("api/workouts")

// app.get("api/workours/range")
