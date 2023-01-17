var express = require('express');
const app = require('../app');
var router = express.Router();
router.use(express.urlencoded({ extended: true }))
//db model의 위치를 알려준다.
var User = require('../models/users')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//create
router.post('/sign_in', function (req, res) {
  var user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ message: '생성 실패' });
      return;
    }
    res.json({ message: '생성 완료!' });
  })

})


module.exports = router;
