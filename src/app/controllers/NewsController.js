class NewsController{
    // Get /news
    index(req, res) {
        res.render('news')
    }
    // [GET] /news/slug
    show(req,res) {
        res.send('this is slug detail');
    }
}
module.exports= new NewsController;
