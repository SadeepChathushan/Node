const express = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

const app = express();

const secretKey = "your_secret_key";

app.use(express.json());

app.use(passport.initialize());

const JWTStratergy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const users = [
    {id:1, username:'admin',password:'password'},
    {id:2, username:'user',password:'password'}
]

passport.use(new JWTStratergy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
}, (jwtPayload, done)=>{

    const user = users.find((u) => u.id === jwtPayload.sub)

    if(user){
        return done(null, user)
    }else{
        return done(null ,false)
    }

}))

app.post('/login', (req,res)=>{
    const {username,password} = req.body
    const user =users.find(u =>u.username === username && u.password === passsword)

    if (user){
        const payload ={sub : user.id, username: user.username}
        const token = jwt.sign(payload,secretKey)
    }else{
        res.status(401).json({message: 'Authentication failed'})

    }


})

app.get('/protected',passport.authenticate('jwt', {session:false}),(req,res)=>{
    res.json({message : 'Protected route accessed successfully'})
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})