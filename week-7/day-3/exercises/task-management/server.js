const express = require("express");
const fs = require("fs");
const tasks = require("./tasks.json");

const app = express();
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Task Managment on PORT: ${PORT}`);
});
app.use(express.json());

app.get("/tasks", (req, res) => {
  try {
    const data = fs.readFileSync("./tasks.json", "utf8");
    console.log("File content:", JSON.parse(data));
    res.json(JSON.parse(data));
  } catch (error) {
    res.json({ message: "Error reading file:" });
  }
});

app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  try {
    const data = fs.readFileSync("./tasks.json", "utf8");
    const jsonData = JSON.parse(data);
    const idIndex = jsonData.findIndex((task) => task.id == id);
    if (idIndex === -1) {
      res.json({ message: "There is no Task with this ID" });
    } else {
      res.json(jsonData[idIndex]);
    }
  } catch (error) {
    res.json({ message: "Error reading file:" });
  }
});

app.post("/tasks", (req, res) => {
  const { taskName, isCompleted } = req.body;
  try {
    const rawData = fs.readFileSync("./tasks.json", "utf8");
    const tasks = JSON.parse(rawData);
    const newTask = { id: tasks.length + 1, taskName, isCompleted };
    tasks.push(newTask);
    const updatedData = JSON.stringify(tasks, null, 2);
    try {
      fs.writeFileSync("./tasks.json", updatedData);
      const updatedFile = fs.readFileSync("./tasks.json", "utf8");
      res.json(JSON.parse(updatedFile));
    } catch (error) {
      res.json({ message: "Error Writing to file:" });
    }
  } catch (err) {
    res.json({ message: "Error reading file:" });
  }
});

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { taskName, isCompleted } = req.body;

  try {
    const rawData = fs.readFileSync("./tasks.json", "utf8");
    const tasks = JSON.parse(rawData);
    const idIndex = tasks.findIndex((task) => task.id == id);
    if (idIndex === -1) {
      res.json({ message: "There is no Task with this ID" });
    } else {
      const updateTask = tasks[idIndex];
      updateTask = { ...updateTask, taskName, isCompleted };
      tasks[idIndex] = updateTask;
      const updatedData = JSON.stringify(tasks, null, 2);
      try {
        fs.writeFileSync("./tasks.json", updatedData);
        const updatedFile = fs.readFileSync("./tasks.json", "utf8");
        res.json(JSON.parse(updatedFile));
      } catch (error) {
        res.json({ message: "Error Writing to file:" });
      }
    }
  } catch (err) {
    res.json({ message: "Error reading file:" });
  }
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  try {
    const rawData = fs.readFileSync("./tasks.json", "utf8");
    const tasks = JSON.parse(rawData);
    const idIndex = tasks.findIndex((task) => task.id == id);
    if (idIndex === -1) {
      res.json({ message: "There is no Task with this ID" });
    } else {
      tasks.splice(idIndex, 1);
      const updatedData = JSON.stringify(tasks, null, 2);
      try {
        fs.writeFileSync("./tasks.json", updatedData);
        const updatedFile = fs.readFileSync("./tasks.json", "utf8");
        res.json(JSON.parse(updatedFile));
      } catch (error) {
        res.json({ message: "Error Writing to file:" });
      }
    }
  } catch (err) {
    res.json({ message: "Error reading file:" });
  }
});
