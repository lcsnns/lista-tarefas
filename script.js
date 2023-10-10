$(document).ready(function() {
    // Função para adicionar uma tarefa à lista
    function addTask(taskName) {
        $("#task-list").append("<li>" + taskName + "</li>");
    }

    // Enviar o formulário quando o botão for clicado
    $("#todo-form").submit(function(event) {
        event.preventDefault();
        var taskName = $("#task-input").val();
        if (taskName.trim() !== "") {
            addTask(taskName);
            $("#task-input").val("");
        }
    });

    // Marcar tarefas como concluídas com um efeito de linha
    $(document).on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});