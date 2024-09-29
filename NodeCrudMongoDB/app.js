const express = require('express');

const app = express();

const dbConnect =require('./db/dbConnect')
const Users = require('./db/userModel')

dbConnect()

// const newUser = new Users({
//     email : 'john23@example.com',
//     password : 'password123'
// })

// newUser.save()
//     .then(()=>{
//         console.log('User insert succesfully')
//     })
//     .catch((error)=>{
//         console.error('Error inserting user:',error)

//     })

/*******************Find ***************/

    Users.find()
       .then((users)=>{
        console.log('Users found:',users)
       })
       .catch((error)=>{
        console.error('Error finding users:',error)
       })
/********************Upadate*************/

    Users.updateOne({email:'john1@example.com'})
       .then(()=>{
        console.log('User update successfully')
       })
       .catch((error)=>{
        console.error('Error updating')
       })   

/**********************Delete ***********/
    Users.deleteOne({email:'john23@example.com'})
    .then(()=>{
        console.log('User delete successfully')
       })
       .catch((error)=>{
        console.error('Error deleting user')
       })  
module.exports = app;