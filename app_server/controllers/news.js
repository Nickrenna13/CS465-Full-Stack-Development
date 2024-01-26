const fs = require('fs');
const story = JSON.parse(fs.readFileSync('./data/story.json', 'utf8'));
const latest_news = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));
const vac_tips = JSON.parse(fs.readFileSync('./data/vac_tips.json', 'utf8'));
/* GET news */ 
const news = (req, res) => {
    res.render('news', {title: 'News Travlr', story, latest_news, vac_tips});
};

module.exports = {
    news
}