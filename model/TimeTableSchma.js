const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PerDayTimeTableSchema = new Schema({
  day: [
    {
      dayName: {
        type: String,
        
      },
      timeTable: [
        {
          faculty: {
            type: String,
            required: true,
          },
          time: {
            type: String,
            required: true,
          },
          isAvailable: {
            type: Boolean,
            required: true,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("PerDayTimeTable", PerDayTimeTableSchema);