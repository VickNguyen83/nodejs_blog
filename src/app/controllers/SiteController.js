class SiteController {
  // Get /
  index(req, res) {
    res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
  user(req, res) {
    res.render('user');
  }
}
module.exports = new SiteController();
