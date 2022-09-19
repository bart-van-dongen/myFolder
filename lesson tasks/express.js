const express = require ('express');
const app = express();
const {PORT = 3000} = process.env;
const path = require ('path')


//default route for your website
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})




// Routes go here

app.listen(3000, () => console.log ('Server is running on port ${3000}'))


