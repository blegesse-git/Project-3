const express = require('express');

const PORT = process.env.PORT || 3001;
const db = require ("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



// app.use(routes)

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});