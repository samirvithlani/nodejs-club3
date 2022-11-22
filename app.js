const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var search = require("./search");

///create server using exress
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.post("/hello", (req, res) => {
  var reqbody = req.body;
  res.json({
    message: "recoed added.",
    data: reqbody,
  });
  //res.send("Hello world post")
  //console.log(req.body.name)
});
app.delete("/hello/:id", (req, res) => {
  console.log(req.params.id);

  var id = req.params.id;
  //res.send("Hello world delete.."+id)
  //res.status(200).send(id+"..is deleted")
  res.json({
    id: id,
    message: "is deleted",
  });
});

app.put("/user/:id", (req, res) => {
  try {
    var id = req.params.id;
    if (id == 1) {
      throw new Error("user not found");
    } else {
      res.json({
        message:"user updated",
        id:id,
        data:req.body.data

      })
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.get("/user/:name",(req,res)=>{


    var name = req.params.name;
    res.send("Hello "+name)

})



app.get("/employee/:name",(req,res)=>{


    var name = req.params.name;
    var employees = search.searchData(name)

    res.json(employees)

})