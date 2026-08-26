import express from "express";

const app = express();

app.use("/", (req, res, next) => {
    res.json({
        status: "success", 
        message: "Hello from expres app"
    })
})

app.listen(3000, () => {
  console.log("App is running successfully on http://localhost:3000/");
});