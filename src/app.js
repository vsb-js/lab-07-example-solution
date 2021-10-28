import express from 'express'

import * as User from "../models/user.js"

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// this is the simpliest example - if you go to the localhost:3000, if show you "Hello world"
app.get('/users', async (req, res) => {


  const users = await User.findAll()

  res.send(JSON.stringify(users))
})


app.post('/users/create', async (req, res) => {
  const data = req.body
  console.log(data)

  await User.create(data).then((user) => {
    res.status(200);
    res.json({ success: "OK", data: { user } });
  }).catch((e) => {
    console.log(e)
    res.status(500);
    res.send("Something wrong happens!")
  });
})

app.get('/users/', async (req, res) => {
  await User.findAll().then((users) => {
    console.log(users)
    res.json(users)
  }).catch((error) => {
    res.send(error)
  });
})


// TASK 1: Create model for PLANETS in file ./models/planet.js
// check ./models/user.js as example how to do it
// Check DB for schema - it should match.
// and import it to this file




// TASK 2: Create endpoint for creating new planet
// ADD new planet into DB
// If success, return json {success: "OK", data: { new planet}}
// Catch all errors
app.post('/planets/create', async (req, res) => {

})


// TASK 3: Create endpoint for reading all planets
// Read all planets from DB
// If success, return array of objects
// Catch all errors
app.get('/planets/', async (req, res) => {

})

// TASK 4: Create endpoint for returning specific planets with terrain
// Read specific planets from DB
// you need to find terrain in the string! 
// Examples /planets/terrain/mountains -> returns 4 planets
//          /planets/terrain/ocean -> returns 1 planet
//          /planet/terrain/grassy-hills -> returns 1 planet
// Return  array of objects (can be array with one item)
// Catch all errors
app.get('/planets/terrain/:terrain', async (req, res) => {

})

// TASK 5: Create endpoint for deleting planet
// Delete planet in DB
// return json { deleted: "OK", data: {deleted_planet}}
// Catch all errors
app.get('/planets/delete/:id', async (req, res) => {

})

// this only show that it listen on port 3000.


export { app };