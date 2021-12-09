const express = require('express');
const app = express();
const path = require('path'); 

app.get('/', (req, res) =>  {
res.render('index')
})


app.set('view engine', 'pug');
app.use(express.static('public'));


app.listen(3000,()=> {
    console.log('server listening on port 3000...')
});
