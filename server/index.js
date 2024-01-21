const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

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

//signup
app.post('/signup', async (req,res) => {
    console.log(req.body);
    const {email} = req.body

    userModel.findOne({ email: email })
    .then((result) => {
        console.log(result);
        if (result) {
            res.send({ message: "Email id is already registered", alert: false });
        } else {
            const data = userModel(req.body);
            // Save the document and handle the promise
            data.save()
                .then(() => {
                    res.send({ message: "Successfully signed up", alert: true });
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

// Login
app.post('/login', (req, res) => {
    console.log(req.body);
    const { email } = req.body
    userModel.findOne({email : email})
        .then(result => {
            if(result){
                const dataSend = {
                    _id: result._id,
                    firstName: result.firstName,
                    lastName: result.lastName,
                    email: result.email,
                    image: result.image
                } 
                res.send({message: "Login Successfull", alert:true, data : dataSend})
            }else {
                res.send({message: "Incorrect Email ID or Password.", alert:false})

            }
        })
})


// New Products
// schema

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: Number,
    description: String
})

const productModel = mongoose.model('products', productSchema)

//api
app.post('/newproduct', (req, res) => {
    const data  = productModel(req.body)
    const dataSave =  data.save()
    res.send({message: "Product Updated Successfully"})

})

// api
app.get('/products', async (req, res) => {
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})

app.listen(PORT, () => {
    console.log("Server is running at port:" + PORT);
})