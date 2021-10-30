const express = require("express");
const db = require("../models/index");

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/all', async (req, res) => {

    // get all values in users table
    const users = await db.User.findAll();
    // get all values in the cars table
    const cars = await db.Car.findAll();

    // TIP: btw we could improve response time by using promise.all and call them at the same time ...
    // TIP: We should wrap all of this to try{} catch to properly catch all the errors

    // Send the response back
    res.json({
        cars: cars,
        users: users
    });
})

app.get('/users/', async (req, res) => {
    // Another way we could write the promise without the ASYNC AWAIT
    db.User.findAll().then((users) => {
        res.json(users)
    }).catch((error) => {
        res.send(error)
    });
})

// Parametrized query
app.get('/users/:id', async (req, res) => {

    // the param id is in req.params.id
    // we could do this "trick" to get it out

    const {id} = req.params;

    // FindAll always returns a array!!
    let users = await db.User.findAll({
        where: {
            id: id
        }
    });

    // it's up to us as we write up our API, if we specify this returns array we can be fine
    // or we could return just one record || think what happens when no user is find
    res.json(users[0])
})


// Best simulated with POSTMAN or other tool see https://github.com/vsb-js/forum-2021-winter/discussions/13
app.post('/users/create', async (req, res) => {
    const data = req.body
    console.debug("Body request:")
    console.debug(data)

    try {
        const createdUser = await db.User.create(data);
        res.status(200);
        res.json({success: "OK", data: {createdUser}});
    } catch (e) {
        console.error(e)
        // Check the proper response codes https://www.restapitutorial.com/lessons/httpmethods.html
        res.status(500);
        res.send("Something wrong happens!")
    }

});

// we are using delete HTTP method
// See https://github.com/vsb-js/forum-2021-winter/discussions/13
app.delete('/users/:id', async (req, res) => {

    // the param id is in req.params.id
    // we could do this "trick" to get it out

    const {id} = req.params;

    try {
        await db.User.destroy({
            where: {
                id: id
            }
        });

        // we could send confirmation that user was correctly delete
        res.json({success: "OK"});
    } catch (e) {
        console.error(e)
        // Check the REST API documentation what should be the desired reponse code https://www.restapitutorial.com/lessons/httpmethods.html
        res.status(500);
        res.send("Something wrong happens!")
    }

})


// this only show that it listen on port 3000.


module.exports = {app};