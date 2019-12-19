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
                <a
                  href="#"
                  data-id=${element.id}
                  class="btn btn-outline-success text-center"
                  style="width: 150px;"
                  >Edit</a
                >
                <a
                  href="#"
                  data-id=${element.id}
                  class="btn btn-outline-danger text-center"
                  style="width: 150px;"
                  >Delete</a
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
    // renderTodos();
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
