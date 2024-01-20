/* GET meals */ 
const meals = (req, res) => {
    res.render('meals', {title: 'Meals Travlr'});
};

module.exports = {
    meals
}