const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

// mongodb connection
console.log(process.env.MONGODB_URL);
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("Database is connected"))
    .catch(err => console.log(err))

// Schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
    image: String
})

// model

const userModel = mongoose.model("user", userSchema)

// api
app.get('/', (req, res) => {
    res.send('Server is running')
})

app.post('/signup', async (req,res) => {
    console.log(req.body);
    const {email} = req.body

    userModel.findOne({ email: email })
    .then((result) => {
        console.log(result);
        if (result) {
            res.send({ message: "Email id is already registered" });
        } else {
            const data = userModel(req.body);
            // Save the document and handle the promise
            data.save()
                .then(() => {
                    res.send({ message: "Successfully signed up" });
                })
                .catch((saveError) => {
                    console.log(saveError);
                    res.status(500).send({ message: "Error during signup" });
                });
        }
    })
    .catch((findError) => {
        console.log(findError);
        res.status(500).send({ message: "Error during signup" });
    });

       
    
    
})

app.listen(PORT, () => {
    console.log("Server is running at port:" + PORT);
})