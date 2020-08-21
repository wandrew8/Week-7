const { Router } = require('express');
const router = Router();
const weatherDAO = require("../daos/weather");

router.get("/landing", (req, res, next) => {
    res.render('index');
});

router.get("/weather", (req, res, next) => {
    res.render('weather');
})

router.get("/weather/location", async (req, res, next) => {
    const { name } = req.query;
    if(!name) {
        console.log("Please submit a location to search")
        res.redirect("/weather");
    } else {
        const location = await weatherDAO.findLocation(name);
        if (!location) {
            console.log("Sorry, we could not find that location");
            res.status(404).send(`The weather for ${name} is not available`);
        } else {
            console.log(location)
            res.status(200);
            res.render('report', { name: location.name, temperature: location.temperature });
        }

    }
})

module.exports = router;