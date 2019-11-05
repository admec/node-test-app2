const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('todo', {data: "Node.js is Cool!"});
});

app.listen(port, function(){
    console.log('connected');    
});