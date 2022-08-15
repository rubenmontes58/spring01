const express = require('express');
const knex = require('../db/conexion');


const cargarProductos = (req, res) => {
    knex
    .insert(
      [
        { producto: req.body.producto,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
        costo: req.body.costo,
        precioventa: req.body.precioventa,

        }
       
      ], 
      ['id']
    )
    .into('vinos')
    .then(ids => {
        console.log(ids);
        res.redirect('/showproductos');
    }
    );
}

const express  = require('express');
const knex = require('../db/conexion'); 

const mostrarProductos = (req, res) => {
    knex.select('*').from('vinos').then(vinos => {
        console.log(vinos);
        res.render('productos', {vinos});
    });
    }


    module.exports = {mostrarProductos};

module.exports = {cargarProductos};
