

window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector(".new-task-input")
    const list_le = document.querySelector("#tasks")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {

            alert("klhckkdbjad");
            return;
        }
        const task_le = document.createElement("div");
        task_le.classList.add("task");
        //_____
        const task_content_le = document.createElement("div");
        task_content_le.classList.add("content");
        // task_content_le.innerHTML = task;


        const task_input_le = document.createElement("input");
        task_input_le.type = "text";
        task_input_le.classList.add("text");
        task_input_le.value = task;
        task_input_le.setAttribute("readonly", "readonly")
        task_content_le.appendChild(task_input_le)


        const task_action_le = document.createElement("div")
        task_action_le.classList.add("actions")

        const task_edit_le = document.createElement("button")
        task_edit_le.classList.add("edit")
        task_edit_le.innerHTML = "edit"

        const task_delete_le = document.createElement("button")
        task_delete_le.classList.add("edit")
        task_delete_le.innerHTML = "delete"

        task_action_le.appendChild(task_edit_le)
        task_action_le.appendChild(task_delete_le)


        task_le.appendChild(task_content_le);
        task_le.appendChild(task_action_le)
        list_le.appendChild(task_le)

        input.value = ""

        task_edit_le.addEventListener("click", () => {
            if (task_edit_le.innerText.toLowerCase() == "edit") {
                task_input_le.removeAttribute("readonly");
                task_input_le.focus();
                task_edit_le.innerHTML = "save"
            } else {
                task_input_le.setAttribute("readonly", "readonly")
                task_edit_le.innerHTML = "edit"
            }

        });
        task_delete_le.addEventListener("click", () => {
            list_le.removeChild(task_le)
        });


    })
}) 