// app.js
import express from 'express';
import taskController from './controllers/taskController.js';
import rand from 'random';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random', { rand: num });
})
app.use('/', taskController);






app.listen(5000, () => {
  console.log('Server running on port 4000');
});
