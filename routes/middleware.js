const express = require('express')
const router = express.Router()
const mysql = require('mysql2')

var pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  user: 'root',
  password: 'Villarreal7',
  database: 'BD'
})

router.use('/admin/', (peticion, respuesta, siguiente) => {
  if (!peticion.session.usuario) {
    peticion.flash('mensaje', 'Debe iniciar sesión')
    respuesta.redirect("/inicio")
  }
  else {
    siguiente()
  }
})


module.exports = router
