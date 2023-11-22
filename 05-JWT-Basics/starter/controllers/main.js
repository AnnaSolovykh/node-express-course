const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
    const { username, password } = req.body;
    //mongoose validation || JOI || check in the controller
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    };
    res.send('Fake Login/register/signup');
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