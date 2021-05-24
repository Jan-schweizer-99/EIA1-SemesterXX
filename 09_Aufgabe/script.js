var aufgabe_9;
(function (aufgabe_9) {
    window.addEventListener("load", function () {
        var neueEingabe = document.querySelector("#neueEingabe");
        var list = document.querySelector("#newtoDo");
        var hinzufuegen = document.querySelector("#addButton");
        var FACH = document.querySelector("#FACH");
        var allToDos = [];
        /*         document.querySelector("#VIDEOTECH").addEventListener("click", function (): void { changepicture(1); }); */
        hinzufuegen.addEventListener("click", function () { newToDo(); }); //bei einem click auf das + symbol Eingabe bestätigen
        neueEingabe.addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                newToDo();
            }
        });
        function newToDo() {
            allToDos.push({ checked: false, content: neueEingabe.value, toDoId: "", checkmarkId: "", trashId: "" });
            displayList();
        }
        function displayList() {
            list.innerHTML = "";
            var _loop_1 = function (i) {
                var todo = allToDos[i]; //Array für eingaben
                todo.toDoId = i.toString();
                todo.checkmarkId = "check" + i.toString();
                todo.trashId = "trash" + i.toString();
                var idToDo = document.createAttribute("id"); //neue Atribute erstellen
                var idChecked = document.createAttribute("id");
                var idTrash = document.createAttribute("id");
                var newToDo_1 = document.createElement("li");
                var node = document.createTextNode(todo.content);
                var checkbox = document.createElement("i");
                var checked = document.createAttribute("class");
                var trashIcon = document.createElement("i");
                var trash = document.createAttribute("class");
                idToDo.value = todo.toDoId; //speichere eingabe in zwischenspeicher
                idChecked.value = todo.checkmarkId;
                idTrash.value = todo.trashId;
                trash.value = "far fa-trash-alt";
                trashIcon.setAttributeNode(trash);
                checked.value = "far fa-circle";
                checkbox.setAttributeNode(checked);
                newToDo_1.appendChild(node); //speichere zwischenspeicher in neuen Punkt
                newToDo_1.setAttributeNode(idToDo);
                newToDo_1.appendChild(trashIcon);
                checkbox.setAttributeNode(idChecked);
                newToDo_1.appendChild(checkbox);
                list.appendChild(newToDo_1);
                checkbox.addEventListener("click", function () { checkToDo(idChecked.value); });
                trashIcon.addEventListener("click", function () { deleteToDo(idTrash.value); });
            };
            for (var i = 0; i < allToDos.length; i++) {
                _loop_1(i);
            }
            document.querySelector("#aufgabenzuerledigen").innerHTML = "Aufgaben zu erledigen: " + (allToDos.length).toString(); //aktualiesiere Aufgabenschriftzug
            neueEingabe.value = ""; //lösche eingabefeld
        }
        function deleteToDo(id) {
            for (var i = 0; i < allToDos.length; i++) {
                var todo = allToDos[i];
                if (todo.trashId == id) {
                    allToDos.splice(i, 1);
                }
            }
            displayList();
        }
        function checkToDo(id) {
            for (var i = 0; i < allToDos.length; i++) {
                var todo = allToDos[i];
                if (todo.checkmarkId == id) {
                    var check = document.querySelector("#" + id);
                    if (todo.checked == false) {
                        check.setAttribute("class", "fas fa-check-circle");
                        todo.checked = true;
                    }
                    else {
                        check.setAttribute("class", "far fa-circle");
                        todo.checked = false;
                    }
                }
            }
        }
        /*         function changepicture(fachnummer: number) {
                    switch (fachnummer) {
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            break;
                        case 4:
                            break;
                        case 5:
                            break;
                        case 6:
                            break;
                    }
                } */
    });
})(aufgabe_9 || (aufgabe_9 = {}));
//# sourceMappingURL=script.js.map