const express = require("express");
const router = express.Router();

const list = {
  b_id: "nana",
  b_start_date: "2021-09-15",
  b_title: "npm",
};
router.get("/getlist", (req, res) => {
  console.table(list);
  res.json(list);
});

router.get("/update/:id/:title", (req, res) => {
  const id = req.params.id;
  const title = req.params.title;

  console.log("id : " + id);
  console.log("title : " + title);

  res.json({ id, title });
});

router.get("/cancel/:id", (req, res) => {
  const id = req.params.id;

  console.log("id : " + id);
  res.json({ id });
});

module.exports = router;
