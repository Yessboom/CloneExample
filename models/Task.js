import Model from './Model.js';

export default class Task extends Model {

  static table = "translation.tasks";
  static primary = ["id"];
}
