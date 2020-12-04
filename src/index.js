var express = require('express');
var path = require('path');
var methodOveride = require('method-override')
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser')
var multer = require('multer');
const jwt = require('jsonwebtoken')
var Role = require('./app/models/Role')

// mongoose.connect('mongodb://localhost:27017/horo_online', {

//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true

// }, (err) => {
//   if (err) {
//     console.log('success')
//   } else {
//     console.log('fail')
//   }
// }
// );

var route = require('./routes');
var db = require('./confiq/db');

//Connect Models
var Role = require('./app/models/Role')
var UserModel = require('./app/models/User')


//connect to db
db.connect()


var app = express();
var port = 3000;
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//connect Mongo

// Use method-override
app.use(methodOveride('_method'))

//template engine


app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views',));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//upload files
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
});
var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log(file);
    if (file.mimetype == "image/bmp" || file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true)
    } else {
      return cb(new Error('Only image are allowed!'))
    }
  }
}).single("img");

app.get('/lessor/create', (req, res) => {
  res.render('lessor/create')
})


app.post('/lessor/store', (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      res.json({ 'kq': 0, 'errMsg': 'A Multer error occurred when uploading.' })

    } else if (err) {
      res.json({ 'kq': 0, 'errMsg': 'An unknown error occurred when uploading.' + err })
    } else {

      var roles = Role({
        room: req.body.room,
        location: req.body.location,
        address: req.body.address,
        price: req.body.price,
        slug: req.body.slug,
        image: req.file.filename
      })
      roles.save((err) => {
        if (err) {
          res.json({ 'kq': 0, 'errMsg': err })
        } else {
          res.redirect('/lessor')
        }
      })
    }

  });
})

// Phan quyen Roles
app.get('/signup', (req, res) => {
  res.render('signup')
})
app.post('/signup', (req, res) => {
  var email = req.body.email
  var password = req.body.password

  UserModel.findOne({ email: email, password: password })
    .then(data => {
      if (data) {
        // return res.send('success')
        var token = jwt.sign({ _id: data._id }, 'mk')
        return res.json({ message: 'success', token: token })
      } else {
        return res.json('fail')
      }
    })
    .catch(err => {
      res.json('loi server')
    })

})
// var checkLogin = (req,res,next) =>{
//   try{
//     var token = req.cookies.token
//     var idUser = jwt.verify(token,'mk')
//     UserModel.findOne({
//       _id : idUser
//     })
//     .then(data =>{
//       if(data){
//         next()
//       }else{
//         res.send('Not permission')
//       }
//     })
//     .catch(err =>{})
//   }catch(err){
//     res.json('Token indentify')
//   }
// }
app.get('/admin/:token', (req, res, next) => {
  try {
    var token = req.params.token
    var kq = jwt.verify(token, 'mk')
    if (kq) {
      next()
    }
  } catch (error) {
    return res.send('You must pre-login')
  }
}, (req, res, next) => {
  res.json('admin')
})

app.get('/lessor', (req, res) => {
  res.send('lessor')
})
app.get('/renter', (req, res) => {
  res.send('renter')
})
route(app);



//127.0.0.1 -localhost:
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.broadcast.emit('hi');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');

});
