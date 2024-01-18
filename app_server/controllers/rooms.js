const rooms = (req, res) => {
    res.render('rooms', {title: 'Rooms Travlr'});
};

module.exports = {
    rooms
}