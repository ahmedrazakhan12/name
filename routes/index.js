const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome")

});


app.get('/home',(req,res)=>{
    res.send("Working")
})


const PORT = 9000;


app.listen(PORT, () => {
    console.log('server is running!');
});