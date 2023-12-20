// controllers/taskController.js
import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();


router.post("/add", async function (req, res) {
  const task = new Task();
  task.task = req.body.task;
  console.log(req.body.task);
  console.log(req.body.wordsEN);
  task.wordsEN = req.body.wordsEN;
  task.wordstry = 0
  task.wordsgood=0
  await task.save();
  res.redirect('/');
});


router.post("/try", async function (req, res) {
  const answer = req.body.answer;
  console.log(answer)
  if (answer == "Okay") {
    console.log("OK");
 
  }

  res.redirect('/');
});



router.get("/delete/:id", async function (req, res) {
  await Task.delete({ id: req.params.id });
  res.redirect('/');
});

router.get("/", async function (req, res) {
  const tasks = await Task.loadMany();
  res.render('listTasks.ejs', { tasks: tasks });
});

export default router;
