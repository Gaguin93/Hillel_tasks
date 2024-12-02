$(document).ready(function (){
    $("#addTaskBtn").click(function () {
        const taskText = $("#taskInput").val().trim();
        if (taskText) {
            const taskItem =$(
            `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="task-text">${taskText}</span>
                    <button class="btn btn-danger btn-sm delete-task">Delete</button>
                </li>`
            );
            $("#taskList").append(taskItem);
            $("#taskInput").val("");
        }
    });
$(document).on("click", ".task-text", function(){
    const taskText =$(this).text();
    $("#modalTaskText").text(taskText);
    const modal = new bootstrap.Modal($("#taskModal"));
    modal.show();
});
$(document).on("click", ".delete-task", function() {
    $(this).closest("li").remove();
    });
});