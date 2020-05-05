const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.sendFile('index.html', {root: './pages'})
})
router.get('/register', (req, res) =>{
    res.sendFile('sign-up.html', {root: './pages'})
    
})

module.exports = router