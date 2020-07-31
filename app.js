document.addEventListener("DOMContentLoaded", () => {
        const buttonAdd = document.createElement("button");
        buttonAdd.textContent = "Добавить";
        buttonAdd.className = "button_add"
        const inputTitle = document.createElement("input");
        inputTitle.placeholder = "Введите задачу";
        const titleName = document.createElement("h1");
        titleName.textContent = "Список дел"
        let divToDo = document.createElement("div");
        divToDo.id = "visitLi";
        let divForInputAndButton = document.createElement("div");
        divForInputAndButton.className = "under_root";
        let h1InputButton = document.createElement("div");
        h1InputButton.className = "title_list";
        document.getElementById("root").append(h1InputButton);
        h1InputButton.prepend(titleName);
        h1InputButton.append(divForInputAndButton);
        divForInputAndButton.prepend(inputTitle);
        divForInputAndButton.append(buttonAdd);
        document.getElementById("root").append(divToDo);


        buttonAdd.onclick = function() {
            if (inputTitle.value.trim() !== "") {
                let liToDo = document.createElement("li");
                liToDo.className = "li_without_line";
                liToDo.onclick = function(e) {
                    if (toDoText.style.textDecoration !== "line-through") {
                        toDoText.style.textDecoration = "line-through";
                        liToDo.className = "li_with_line"

                    } else {
                        toDoText.style.textDecoration = "none";
                        liToDo.className = "li_without_line";
                    }
                }

                let closed = document.createElement("span");
                closed.className = "closed";
                closed.textContent = "x";
                closed.onclick = function(e) {
                    console.log("xx", e.target)
                    console.log("xx2", e.currentTarget)
                    liToDo.style.display = "none";
                }
                liToDo.append(closed);
                let toDoText = document.createElement("span");
                toDoText.className = "to_do_text";
                toDoText.prepend(inputTitle.value);
                liToDo.prepend(toDoText);
                divToDo.append(liToDo);
                inputTitle.value = "";
            }
        }

    })
    // TODO Рефакторинг на читаемость with mc Serj