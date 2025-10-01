import express from 'express';
import result from '../result.json' with {type:'json'};
import fs from 'fs';
import { NOTFOUND } from 'dns';

const router = express.Router();

router.get('/', (req,res) => {
    console.log(req)
    res.render('form',{entry:null})

});

router.post('/submit',(req,res) => {
    const {matric} = req.body;
    const entry = result.find(r => r.matric === matric);
    if (entry) {
        res.status(200).render('form',{entry})
    }else {
        res.status(404).render('form',{entry})
    };
});

export default router;