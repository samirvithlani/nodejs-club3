const PerDayTimeTableSchema = require("../model/TimeTableSchma");
exports.addPerDayTimeTable = (req, res) => {
  const timeTable = new PerDayTimeTableSchema(req.body);
  timeTable.save((err, timeTable) => {
    if (err) {
      return res.status(400).json({
        error: err,

      });
    }
    res.json({ timeTable });
  });
};
