renderTodos = () => {
  $.ajax({
    type: "GET",
    url: "/api"
  }).then(res => {
    $("#todo-container").empty();
    console.log(res);
    res.map(element => {
      $("#todo-container").append(`
      <div class="card">
            <div class="card-body">
              <p class="card-text">
                ${element.todo}
              </p>
              <div class="text-center">
                <button
                  id="editBtn"
                  data-id=${element.id}
                  class="btn btn-outline-success text-center"
                  style="width: 150px;"
                  >Edit</button
                >
                <button
                  id="deleteBtn"
                  data-id=${element.id}
                  class="btn btn-outline-danger text-center"
                  style="width: 150px;"
                  >Delete</button
                >
              </div>
            </div>
          </div>`);
    });
  });
};

postTodo = (tx, cb) => {
  $.ajax({
    type: "POST",
    url: "/api",
    data: { text: tx }
  }).then(res => {
    cb(res);
  });
};

updateTodo = (id, text, cb) => {
  $.ajax({
    type: "PATCH",
    url: "/api",
    data: { id: id, text: text }
  }).then(res => {
    cb(res);
  });
};

deleteTodo = (id, cb) => {
  $.ajax({
    type: "DELETE",
    url: `/api/${id}`
  }).then(res => {
    cb(res);
  });
};

$(document).ready(function() {
  renderTodos();
});

$("#submitBtn").on("click", () => {
  const text = $("#inputText").val();
  postTodo(text, () => {
    renderTodos();
  });
});

$(document).on("click", "#editBtn", function() {
  const id = $(this).attr("data-id");
  const text = $("#inputText").val();

  updateTodo(id, text, () => {
    renderTodos();
  });
});

$(document).on("click", "#deleteBtn", function() {
  const id = $(this).attr("data-id");

  deleteTodo(id, () => {
    renderTodos();
  });
});
