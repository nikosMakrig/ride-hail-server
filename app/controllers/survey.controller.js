const db = require('../models/index');

exports.createSurvey = (req, res) => {
  const sql = `
    INSERT INTO user_surveys (value, userId, createdAt, updatedAt)
     VALUES ('${JSON.stringify(req.body)}', '${req.body.userId}', '${req.body.date}', '${req.body.date}');
   `;
  db.sequelize.query(sql, {
    type: db.sequelize.QueryTypes.INSERT
  }).then(function () {
    res.json({ status: "ok" });
  })
    .catch(function (err) {
      res.json({ status: "error" });
    });

};


