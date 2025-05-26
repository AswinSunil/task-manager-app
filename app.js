const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://mongodb:27017/tasks';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const taskSchema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', taskSchema);

app.use(express.json());

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.status(201).json(task);
});

app.listen(port, () => {
  console.log(`Task Manager app listening at http://localhost:${port}`);
});
