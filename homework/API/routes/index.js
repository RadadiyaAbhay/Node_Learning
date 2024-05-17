import express from 'express';

const routes = express.Router();


routes.get('/', (req, res) => {

    res.json({msg:"Welcome to my api...", data:[{name:"ramu"}]});

});


routes.get('/home', (req, res)=>{

    res.redirect('/');
})

export default routes;  