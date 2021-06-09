var aufgabe_11;
(function (aufgabe_11) {
    //Objekt
    var toDoArray = [
        {
            todosText: "Lorem",
            todosChecked: true
        },
        {
            todosText: "Ipsum",
            todosChecked: false
        },
        {
            todosText: "Dolor",
            todosChecked: false
        }
    ];
    window.addEventListener("click", function () {
        var artyom = new Artyom();
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                toDoArray.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });
                drawListToDOM();
                console.log("Folgende Aufgabe wird der Liste hinzugefügt: " + wildcard);
                artyom.say("Deine Aufgabe" + wildcard + " wurde der Liste hinzugefügt.");
            }
        });
        document.querySelector("#voiceControl").addEventListener("click", function () {
            artyom.say("Welche Aufgabe soll ich der Liste hinzufügen?");
            startContinuousArtyom();
        });
    });
    /**
     * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
     * initialisiert werden
     */
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var doneDOMElement;
    var openDOMElement;
    window.addEventListener("load", function () {
        /**
         * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
         * in ihre Variablen gespeichert werden, um später auf sie
         * zugreifen zu können
         */
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        doneDOMElement = document.querySelector("#done");
        openDOMElement = document.querySelector("#open");
        /**
         * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
         * auf den AddToDo Button gesetzt werden.
         */
        addButtonDOMElement.addEventListener("click", addTodo);
        /**
         * Initial soll einmal die Liste an bereit definierten ToDos
         * aus den Arrays in den DOM gezeichnet werden.
         */
        drawListToDOM();
    });
    function drawListToDOM() {
        // alle todos erst einmal aus dem DOM löschen
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            /**
             * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
             * die Objekt-Instansierung ist aber übersichtlicher)
             */
            var todo = document.createElement("div");
            todo.classList.add("todo");
            /**
             * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
             * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
             *
             * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
             * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
             * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
             * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
             * hier muss die Zeichenkette unterbrochen werden.
             */
            todo.innerHTML = "<span class='check " + toDoArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + toDoArray[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            // Zuweisen der Event-Listener für den Check- und den Trash-Button
            todo.querySelector(".check").addEventListener("click", function () {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
                deleteTodo(index);
            });
            // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
            todosDOMElement.appendChild(todo);
        };
        // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
        for (var index = 0; index < toDoArray.length; index++) {
            _loop_1(index);
        }
        updateCounter();
        updateOffen();
        updateErledigt();
    }
    function updateCounter() {
        counterDOMElement.innerHTML = toDoArray.length + " gesamt";
    }
    function updateOffen() {
        var open = 0;
        for (var index = 0; index < toDoArray.length; index++) {
            if (toDoArray[index].todosChecked == false)
                open++;
        }
        openDOMElement.innerHTML = open + " offen,";
    }
    function updateErledigt() {
        var done = 0;
        for (var index = 0; index < toDoArray.length; index++) {
            if (toDoArray[index].todosChecked == true)
                done++;
        }
        doneDOMElement.innerHTML = done + " erledigt";
    }
    /**
     * Ein neues ToDo wird folgendermaßen erstellt:
     */
    function addTodo() {
        /**
         * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
         * (ansonsten würde ein leerer ToDo-Text erstellt werden,
         * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
         */
        if (inputDOMElement.value != "") {
            /**
             * Der Eingabe-Wert aus dem Input-Feld (.value) wird
             * als neues Element in das ToDo-Array gepusht.
             * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
             * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
             * der Status "unchecked", hier false, gepusht.
             */
            toDoArray.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });
            // Jetzt wird der Text aus dem Eingabefeld gelöscht
            inputDOMElement.value = "";
            /**
             * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
             * wird wieder getriggert
             */
            drawListToDOM();
        }
    }
    /**
     * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
     */
    function toggleCheckState(index) {
        /**
         * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
         * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
         * an der übergebenen Index-Stelle) geändert werden.
         * Von checked zu unchecked bzw. von unchecked zu checked
         * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
         * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
         * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
         * kurz schreiben: wert = !wert
         * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
         * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
         * Kurs behandelt wurden) nutzen.
         */
        toDoArray[index].todosChecked = !toDoArray[index].todosChecked;
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
    /**
     * Diese Funktion löscht ein ToDo
     */
    function deleteTodo(index) {
        /**
         * Durch "index" ist die entsprechende Stelle im Array
         * bekannt, an der das ToDo steht.
         * Jetzt muss diese Stelle beider Arrays gelöscht werden,
         * das ToDo-Text-Array und das Checked/Unchecked-Array
         */
        toDoArray.splice(index, 1);
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
})(aufgabe_11 || (aufgabe_11 = {}));
//# sourceMappingURL=script.js.map