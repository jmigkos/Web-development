const express = require ("express");
const app = express();


// The use must be commented out because it will automatically run and be the response for any request
// app.use((req, res) => {
//     console.log ("We got a new request");
//     res.send("Hello, we got you request, this is a response ")
// })

app.get('/cats' , (req, res) => {
    
    res.send("Meow")
});
// This is the response for every other route. It has to be last, otherwise it will override all the others
app.get('*' , (req, res) => {
    
    res.send("Not found")
});


app.listen (3000 , () => {
    console.log("Listening on port 3000");
})