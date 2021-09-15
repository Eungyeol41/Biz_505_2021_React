const express = require("express");
const router = express.Router();

/**
 * RESTFul
 * 클라이언트에서 요청을 할 때 할 일을 프로토콜 method로 분리하기
 * 		CREATE(Insert) : POST로 요청
 * 		READ(Select) : GET으로 요청
 * 		UPDATE: PUT으로 요청
 * 		DELETE : DELETE로 요청
 *
 * 자원의 명확한 지정
 * 		localhost:3000/book/delete?id=12345로 보통 요청을 수행하는 데
 * 		localhost:3000/book/12345/delete : RESTFul에서 할 일, 자원을 명확하게 설정하기
 *
 * RESTFul 요청을 처리하기 위해서는 표준 HTML 코드만으로는 연결이 불가능하다
 * 		표준 HTML에서는 POST와 GET은 지원하지만 PUT과 DELETE는 지원하지 않음.
 * 		PUT과 DELETE를 사용하기 위해서는 Ajax(fetch)와 같은 별도의 도구를 사용해야 한다.
 *
 * React와 API 연동을 할 때는 RESTFul 4가지 method를 사용하여 서버를 구축한다.
 *
 * POST, PUT : 데이터를 body에 담아서 전송
 * GET, DELETE : 단순히 URL 요청만 수행하거나 pathVarriable 방식으로 데이터를 전송하여 처리를 수행한다.
 *
 * client에서 요청을 할 때
 * 같은 URL을 통하여 요청을 하여도 METHOD가 다르면
 * 	서로 다른 역할을 수행할 수 있기 때문에 서버 코딩을 하는 데 다소 부담이 덜 할 수 있다.
 * 		GET localhost:3000/book/delete를 수행하면
 * 			- 도서정보에서 삭제된 데이터를 나에게 보여달라
 * 		DELETE localhost:3000/book/delete/1를 수행하면
 * 			- 도서정보에서 어떤 ID값이 1인 데이터를 삭제하라
 * 			router.delete("/book/delete")
 * 	라고 요청할 수 있다.
 */
const retData = [
  {
    b_id: "01",
    b_title: "시",
    b_start_date: "2021-09-15",
    b_start_time: "10:45:58",
    b_end_check: "",
    b_cancel: "",
  },
  {
    b_id: "02",
    b_title: "작",
    b_start_date: "2021-09-15",
    b_start_time: "10:46:58",
    b_end_check: "",
    b_cancel: "",
  },
];

/**
 * POST로 받는 데이터는 주로 form에 담긴 데이터
 * API Server에서는 fetch()를 통하여 데이터를 전달받을 때도 사용한다.
 * request.body에 담겨서 전달되기 때문에
 * 		req.body에서 데이터를 추출한다.
 */
router.post("/insert", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end("--- THE END ---");
});

router.post("/bucket", (req, res) => {
  const body = req.body;
  console.log("데이터 추가하기");
  console.log(body);
  res.send("끄<ㅌ>");
});

router.put("/bucket", (req, res) => {
  const body = req.body;
  console.log("데이터 업데이트 하기");
});

// localhost:3000/api/get
router.get("/get", (req, res) => {
  console.log("전체 리스트 요청하기");
  res.json(retData);
});

// router.get("/getlist", (req, res) => {
//   res.json(retData);
//   //   console.table(retData);
// });

// localhost:3000/get/1
router.get("/get/:id", (req, res) => {
  console.log("개별 데이터 요청하기");
  res.json(retData[0]);
});

// localhost:3000/api/1/get
router.get("/:id/get", (req, res) => {
  console.log("개별 데이터 요청하기");
  res.json(retData[0]);
});

router.get("/update/:id/:title", (req, res) => {
  const id = req.params.id;
  const title = req.params.title;

  console.log("UPDATE - 수신된 데이터 : ", id, title);
  //   res.status(200).end("--- THE END ---");
  /**
   * HTTP Status Code
   * 2xx : 정상처리가 되고 데이터를 보낼 준비를 하고 있으니 기다려라
   * 3xx : 조금 전에 보내준 결과와 변함이 없으니 그대로 써라, redirect
   * 4xx : 보낸 요청에 문제가 있다
   * 		400 : 보낸 데이터가 문제가 있다.
   * 		401, 403 : 권한이 없다.
   * 		404 : NOT FOUND
   * 		405 : method가 잘못되었다.
   * 		(※※ 400, 405는 Spring에서만 나오는 오류이다. ※※)
   * 5xx : Server Internet Error
   */
  res.end("--- THE END ---");
});

router.put("/update", (req, res) => {});

router.delete("/cancel/:id", (req, res) => {
  const id = req.params.id;

  console.log("CANCEL - 수신된 데이터 : ", id);
  //   res.end("--- THE END ---");
  res.json({ title: "--- THE END ---" });
});

module.exports = router;
