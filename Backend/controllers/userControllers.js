const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/useModel')
//@desc : Register a new user
//@route : /api/user
//@access : public

const getUser = async (req, res) => {
    const getAllUser = await User.find().select('-password')
    res.send(getAllUser)
}

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill all details')
    }

    const userExist = await User.findOne({ email: email })

    if (userExist) {
        res.status(400)
        throw new Error('User already exist')
    }

    const salt = await bcrypt.genSalt(12)

    const hashedPassword = await bcrypt.hash(password, salt)

    // user create
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201)
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error("invalid user data")
    }

    res.send('user Register')
}
)

const loginUser = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(401)
            res.send('enter all field') 
            console.log( req.body);
        }
        const userLogin = await User.findOne({ email: email })
    
        if (userLogin && (await bcrypt.compare(password, userLogin.password))) {
            res.status(201).json({
                id: userLogin.id,
                name: userLogin.name,
                email: userLogin.email,
                token: generateToken(userLogin.id)
            })
        } else {
            res.status(401)
            throw new Error("invalid credentials")
        }
        res.send('user Login')
    
    }
)

// generatetoken
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

}

const getMe = (req, res) => {
    res.status(200)
    const user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
    res.send(user)
    // res.send('Ok me access')
}

module.exports = { getUser, registerUser, loginUser, getMe }