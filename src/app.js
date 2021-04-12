const calculateFibonacci = require('./controllers/fibonacci');

module.exports = (app) => {
    app.use("/getfibonacci/:index", (req, res, next) => {
        const { index } = req.params
        res.json(calculateFibonacci(index));
    });
    
}