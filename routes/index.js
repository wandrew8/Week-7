const { Router } = require('express');
const router = Router();
const weatherRoute = require('./weather');

router.get("/landing", (req, res, next) => {
    res.render("index");
});

router.use("/weather", weatherRoute);

module.exports = router;