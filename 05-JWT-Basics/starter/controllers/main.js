const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    }

    const id = new Date().getDate();
    //later in the course id will be provided by db
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn: '30d'} ); 
    //payload should be concise, secret shoud be complex
    res.status(200).json({ msg: 'user created', token })
};

const dashboard = async (req, res) => {
    const luckkyNumber = Math.floor(Math.random()*100);
    res.status(200).json({ 
        msg: `Hello, Anna Solovykh`, 
        secret: `Here is your authorized data, your lucky number is ${luckkyNumber}`
    });
};

module.exports = {
    login,
    dashboard
}