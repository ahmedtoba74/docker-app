import express from "express";

const app = express();

app.use("/", (req, res, next) => {
    res.json({
        status: "success", 
        message: "Hello from expres app!"
    })
})

const port = 3000;

app.listen(port, () => {
  console.log(`App is running successfully on http://localhost:${port}/`);
});