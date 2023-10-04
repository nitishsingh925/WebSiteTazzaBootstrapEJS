const express = require('express');
const app = express();

app.use(express.static('./public'))

// set the view engine to ejs
app.set('view engine', 'ejs');


//  page live rendering link
app.get('/', function(req, res) {
    res.render('index', {"requestUrl":req});
  });
app.get('/about' , (req , res)=>{
  res.render('about', {"requestUrl":req})
})
app.get('/contact' , (req , res)=>{
  res.render('contact', {"requestUrl":req})
})
app.get('/gallery' , (req , res)=>{
  res.render('gallery', {"requestUrl":req})
})
app.get('/product' , (req , res)=>{
  res.render('product', {"requestUrl":req})
})
app.get('*' , (req , res)=>{
  res.render('error', {"requestUrl":req})
})



app.listen(3000,()=>{
  console.log('server listening at http://localhost:3000')
});