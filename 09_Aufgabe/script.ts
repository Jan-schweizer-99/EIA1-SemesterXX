namespace aufgabe_9 {
    window.addEventListener("load", function (): void {

        const neueEingabe: HTMLInputElement = document.querySelector("#neueEingabe");
        const list: HTMLUListElement = document.querySelector("#newtoDo");
        const hinzufuegen: HTMLElement = document.querySelector("#addButton");
        const FACH: HTMLElement = document.querySelector("#FACH");

        interface ToDo {
            checked: boolean;
            content: string;
            toDoId: string;
            checkmarkId: string;
            trashId: string;
        }
        let allToDos: ToDo[] = [];

/*         document.querySelector("#VIDEOTECH").addEventListener("click", function (): void { changepicture(1); }); */

        hinzufuegen.addEventListener("click", function (): void { newToDo(); }); //bei einem click auf das + symbol Eingabe bestätigen
        neueEingabe.addEventListener("keydown", function (event: KeyboardEvent): void { //bei enter bestätigen
            if (event.keyCode == 13) {
                newToDo();
            }
        });


        function newToDo(): void { //Funktion zum hinzufügen der neuen eingabe
            allToDos.push({ checked: false, content: neueEingabe.value, toDoId: "", checkmarkId: "", trashId: "" });
            displayList();
        }

        function displayList(): void {  //speichern der neuen Aufgaben in die liste

            list.innerHTML = "";

            for (let i: number = 0; i < allToDos.length; i++) {
                let todo: ToDo = allToDos[i]; //Array für eingaben

                todo.toDoId = i.toString();
                todo.checkmarkId = "check" + i.toString();
                todo.trashId = "trash" + i.toString();

                let idToDo: Attr = document.createAttribute("id");       //neue Atribute erstellen
                let idChecked: Attr = document.createAttribute("id");
                let idTrash: Attr = document.createAttribute("id");
                let newToDo: HTMLLIElement = document.createElement("li");
                let node: Node = document.createTextNode(todo.content);
                let checkbox: HTMLElement = document.createElement("i");
                let checked: Attr = document.createAttribute("class");
                let trashIcon: HTMLElement = document.createElement("i");
                let trash: Attr = document.createAttribute("class");


                idToDo.value = todo.toDoId;                                //speichere eingabe in zwischenspeicher
                idChecked.value = todo.checkmarkId;
                idTrash.value = todo.trashId;

                trash.value = "far fa-trash-alt";
                trashIcon.setAttributeNode(trash);


                checked.value = "far fa-circle";
                checkbox.setAttributeNode(checked);


                newToDo.appendChild(node);                                  //speichere zwischenspeicher in neuen Punkt
                newToDo.setAttributeNode(idToDo);
                newToDo.appendChild(trashIcon);
                checkbox.setAttributeNode(idChecked);
                newToDo.appendChild(checkbox);

                list.appendChild(newToDo);

                checkbox.addEventListener("click", function (): void { checkToDo(idChecked.value); });
                trashIcon.addEventListener("click", function (): void { deleteToDo(idTrash.value); });
            }
            document.querySelector("#aufgabenzuerledigen").innerHTML = "Aufgaben zu erledigen: " + (allToDos.length).toString(); //aktualiesiere Aufgabenschriftzug

            neueEingabe.value = ""; //lösche eingabefeld
        }
        function deleteToDo(id: string): void { //bei eingabe mit aufgabe löschen Aufgabe entfernen

            for (let i: number = 0; i < allToDos.length; i++) {
                let todo: ToDo = allToDos[i];

                if (todo.trashId == id) {
                    allToDos.splice(i, 1);
                }
            }

            displayList();
        }
        function checkToDo(id: string): void { //bei eingabe mit aufgabe erledigt häkchen setztzen

            for (let i: number = 0; i < allToDos.length; i++) {
                let todo: ToDo = allToDos[i];

                if (todo.checkmarkId == id) {
                    let check: HTMLElement = document.querySelector("#" + id);

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
}