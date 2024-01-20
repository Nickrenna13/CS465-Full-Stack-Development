/* GET news */ 
const news = (req, res) => {
    res.render('news', {title: 'News Travlr'});
};

module.exports = {
    news
}