const fs = require('fs');
const rent = JSON.parse(fs.readFileSync('./data/rent.json', 'utf8'));
/* GET rooms */ 
const rooms = (req, res) => {
    res.render('rooms', {title: 'Rooms Travlr', rent});
};

module.exports = {
    rooms
}