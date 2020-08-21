const { Router } = require("express");
const router = Router();

const weatherDAO = require('../daos/weather');

router.get("/", (req, res, next) => {
    res.render("weather");
})

router.get("/location", async (req, res, next) => {
    const { name } = req.query;
    if(!name) {
        console.log("Please submit a location to search")
        res.redirect("/weather");
    } else {
        const location = await weatherDAO.findLocation(name);
        if (!location) {
            console.log("Sorry, we could not find that location");
            res.status(404);
            res.render("noresult", { name: name });
        } else {
            console.log(location)
            res.status(200);
            res.render('report', { name: location.name, temperature: location.temperature });
        }

    }
})

module.exports = router;