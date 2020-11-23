{
    //zadania jako tablica obiektów
    const tasks = [{
            content: "zrobić zupę",
            done: true,
        },
        {
            content: "dokończyc listę",
            done: false,
        },
    ];


    const addTask = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim(); //.trim usuwa biale znaki

            //jesli jest puste to nic nie robimy
            if (newTaskContent === "") {
                return;
            } else {
                tasks.push({ content: newTaskContent, done: false, });
                render();
            }
        })
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };



    //funckja renderująca widok na podstawie listy -> tworzy elementy HTML
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="task__item js-task">
            <button class="tasks__button tasks__buton--done js-toggleDone">${task.done ? "✔" : " "}</button>
            <span class="tasks__content ${task.done ? "tasks__content--done" : " "} ">${task.content}</span>
            <button class="tasks__button tasks__button--remove js-remove">x</button>
             </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        })

        const doneButtons = document.querySelectorAll(".js-toggleDone");
        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                tasks[index].done = true;
                render();
            });


        });


    };

    const init = () => {
        render();
        addTask();


    };

    init();



};