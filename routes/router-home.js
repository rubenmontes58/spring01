const {Router} = require('express');
const router = Router();
const {
    inicio,
cargarProductos,
formcargarProductos,
mostrarProductos,
} = require('../controllers/controller-home');




router.get('/', inicio);
router.get('/addproductos', formcargarProductos);
router.post('/agregarproductos', cargarProductos);



router.get('/showproductos', mostrarProductos);


module.exports = router;



