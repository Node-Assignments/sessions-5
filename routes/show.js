const express = require('express');
const app = express()
const router = express.Router()

let arr = []
router.post('/show', (req, res, next) => {
    if (req.session.authenticated) {
        arr.push(req.body.formEmail)
        console.log("Arr: ", arr)
        res.render('show', { inputForm: arr, isAuth: req.session.authenticated })
    }
    else {
        res.render('input')
    }
})


module.exports = router