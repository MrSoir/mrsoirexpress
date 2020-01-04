const pathPckg = require('path');
const express = require('express');
import { Request, Response } from 'express';
const router  = express.Router();

router.get('/getNilaState', (req: Request, res: Response)=>{
    res.status(200).send({
        status: 'Hallo Nila!!!'
    });
});

console.log('mrSoirRouter-dir: ', __dirname);

const mrSoirFeBuildDir = pathPckg.join(__dirname, '../../mrsoirfe/build');
const mrSoirFeIndexHtml = pathPckg.join(mrSoirFeBuildDir, 'index.html');

router.use(express.static(mrSoirFeBuildDir));

router.get('/*', (req: Request,res: Response) =>{
    res.sendFile(mrSoirFeIndexHtml);
});


module.exports = router;