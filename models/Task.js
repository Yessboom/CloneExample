import Model from './Model.js';

export default class Task extends Model {

  static table = "todotest.tasks";
  static primary = ["id"];
}
