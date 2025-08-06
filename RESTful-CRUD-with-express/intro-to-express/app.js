import express from "express";

// console.log(typeof express); // function
// console.log(express);

const app = express();
const port = 4000;

// console.log(app);
// console.log(typeof app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
