const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "todo_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log(`You have been connected to thread ID: ${connection.threadId}`);
});

// See all
seeAllTodos = cb => {
  connection.query("SELECT * FROM todos", (err, res) => {
    if (err) throw err;
    cb(res);
  });
};

//see one
seeTodo = (todoId, cb) => {
  connection.query(
    "SELECT todo FROM todos WHERE ?",
    { id: todoId },
    (err, res) => {
      if (err) throw err;
      cb(res[0].todo);
    }
  );
};

// create one
createTodo = message => {
  connection.query("INSERT INTO todos SET ?", { todo: message }, err => {
    if (err) throw err;
  });
};

// delete one
deleteTodo = todoId => {
  connection.query("DELETE FROM todos WHERE ?", { id: todoId }, err => {
    if (err) throw err;
  });
};

// update one
updateTodo = (todoId, updatedText) => {
  connection.query(
    "UPDATE todos SET ? WHERE ?",
    [{ todo: updatedText }, { id: todoId }],
    err => {
      if (err) throw err;
    }
  );
};

module.exports = {
  seeAllTodos: seeAllTodos,
  seeTodo: seeTodo,
  createTodo: createTodo,
  deleteTodo: deleteTodo,
  updateTodo: updateTodo
};
