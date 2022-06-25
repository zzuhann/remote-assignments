const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
})
// app.get('/getData', (req, res) => {
//     res.render('getData');
// })

app.get('/getData', (req, res) => {
    let number = req.query.number;
    let result;
    if (req.url === '/getData') {
        result = 'Lack of Parameter';
    }
    else if (req.url !== '/getData' && number > 0) {
        number = Number(number);
        result = number * (number + 1) / 2;
    }
    else {
        result = 'Wrong Parameter';
    }
    res.render('getData', { result, number })
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});