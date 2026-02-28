const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success api',
        message: 'api ok',
        metadata: [
            {
                id: 1,
                name: 'user 1'
            },
            {
                id: 2,
                name: 'user 2'
            }   
        ]
    })
})

module.exports = router;