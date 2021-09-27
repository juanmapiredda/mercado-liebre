const express = require ('express');
const path = require ('path');

const app = express ();

app.use ('/' , express.static(path.resolve(__dirname ,'./public')));

app.get ('/' , (req,res) =>{
    res.sendFile(path.resolve(__dirname , './views/home.html'));
})

app.listen(process.env.PORT || 3000,function () {
    console.log(`Servidor corriendo en puerto 3000`)
  });


