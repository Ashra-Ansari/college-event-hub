const mongoose = require("mongoose");
const Event = require("../models/event.js");
const initData = require("./data.js");
const data = require("./data.js");

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/eventHub");
}

const initDB = async () => {
  await Event.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "69cac8204402a8732c4435f6",
  }));
  await Event.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
