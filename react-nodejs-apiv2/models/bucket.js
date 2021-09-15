const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucket = Schema({
  b_id: String,
  b_title: String,
  b_start_date: String,
  b_flag: Number,
  b_end_date: String,
  b_end_check: Boolean,
  b_cancel: Boolean,
});

// bucketlist: Collection명
// 실제 DB에 저장될 경우: bucketlists라는 이름으로 등록됨.
module.exports = mongoose.model("bucketlist", bucket);
