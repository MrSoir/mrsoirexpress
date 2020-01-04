"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathPckg = require('path');
const express = require('express');
const router = express.Router();
router.get('/getNilaState', (req, res) => {
    res.status(200).send({
        status: 'Hallo Nila!!!'
    });
});
console.log('mrSoirRouter-dir: ', __dirname);
const mrSoirFeBuildDir = pathPckg.join(__dirname, '../../mrsoirfe/build');
const mrSoirFeIndexHtml = pathPckg.join(mrSoirFeBuildDir, 'index.html');
router.use(express.static(mrSoirFeBuildDir));
router.get('/*', (req, res) => {
    res.sendFile(mrSoirFeIndexHtml);
});
module.exports = router;
