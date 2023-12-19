// app.js
import express from 'express';
import taskController from './controllers/taskController.js';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', taskController);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
