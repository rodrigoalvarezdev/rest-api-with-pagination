import express from "express";
import tasksRoutes from "./routes/task.routes";
import cors from 'cors';
import morgan from "morgan";
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.json({
    mensaje: "wellcome to my application",
  });
});

app.use("/api/tasks", tasksRoutes);

export default app;
