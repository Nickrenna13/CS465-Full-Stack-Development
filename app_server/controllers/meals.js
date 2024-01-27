const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));
/* GET meals */ 
const meals = (req, res) => {
    res.render('meals', {title: 'Meals Travlr', food});
};

module.exports = {
    meals
}