var aufgabe_8;
(function (aufgabe_8) {
    var translated;
    var myVar;
    var myVar1;
    var counter = 0;
    var aufnahme = false;
    var index = 0;
    var sound1 = 1;
    var sound2 = 2;
    var sound3 = 3;
    var sound4 = 4;
    var sound5 = 5;
    var sound6 = 6;
    var sound7 = 7;
    var sound8 = 8;
    var sound9 = 9;
    var playarray = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
    var eigenerSound = false;
    window.addEventListener("load", function () {
        //Toggle random and play
        console.log(aufnahme);
        document.getElementById("trashBin").addEventListener("click", function () {
            document.getElementById("playButton").classList.add("is-hidden");
            document.getElementById("pauseButton").classList.remove("is-hidden");
            document.getElementById("mic").classList.add("is-hidden");
            document.getElementById("micDeactivated").classList.remove("is-hidden");
            document.getElementById("randomZ").classList.remove("is-hidden");
            document.getElementById("randomPlay").classList.add("is-hidden");
            clearInterval(myVar);
            clearInterval(myVar1);
            eigenerSound = false;
            aufnahme = false;
            console.log(eigenerSound);
        });
        document.getElementById("playButton").addEventListener("click", function () {
            this.classList.add("is-hidden");
            document.getElementById("pauseButton").classList.remove("is-hidden");
            clearInterval(myVar1);
            eigenerSound = false;
            console.log(eigenerSound);
        });
        document.getElementById("pauseButton").addEventListener("click", function () {
            this.classList.add("is-hidden");
            document.getElementById("playButton").classList.remove("is-hidden");
            myVar1 = setInterval(mysound, 500);
            eigenerSound = true;
            console.log(eigenerSound);
        });
        document.getElementById("randomZ").addEventListener("click", function () {
            this.classList.add("is-hidden");
            document.getElementById("randomPlay").classList.remove("is-hidden");
            myVar = setInterval(random, 500);
        });
        document.getElementById("randomPlay").addEventListener("click", function () {
            this.classList.add("is-hidden");
            document.getElementById("randomZ").classList.remove("is-hidden");
            clearInterval(myVar);
        });
        document.getElementById("mic").addEventListener("click", function () {
            this.classList.add("is-hidden");
            document.getElementById("micDeactivated").classList.remove("is-hidden");
            aufnahme = false;
            console.log(aufnahme);
        });
        document.getElementById("micDeactivated").addEventListener("click", function () {
            this.classList.add("is-hidden");
            document.getElementById("mic").classList.remove("is-hidden");
            aufnahme = true;
            console.log(aufnahme);
        });
        var array = [];
        var _loop_1 = function (num) {
            document.querySelector("#pad" + num).addEventListener("mousedown", function () { playSample("assets/sound_" + num + ".mp3"); }); //Init mousedown events
            document.querySelector("#pad" + num).addEventListener("mousedown", function () { if (aufnahme == true && counter <= 8) {
                countup(counter++, num);
            }
            else {
                counter = 0;
                countup(counter++, num);
            } });
        };
        for (var num = 1; num <= 9; num++) {
            _loop_1(num);
        } //Init mousedown events
        var translate = [7, 8, 9, 4, 5, 6, 1, 2, 3];
        var add = 96;
        var _loop_2 = function (num) {
            document.addEventListener("keydown", function (event) {
                if (event.keyCode == add + num) {
                    translated = translate[num - 1];
                    playSample("assets/sound_" + translate[num - 1] + ".mp3");
                    if (aufnahme == true && counter <= 8) {
                        countup(counter++, translated);
                        countup(counter++, num);
                    }
                    else {
                        counter = 0;
                    }
                }
            });
        };
        for (var num = 1; num <= 9; num++) {
            _loop_2(num);
        }
    });
    function playSample(samples) {
        var sound = new Audio(samples);
        sound.play();
    }
    function countup(counter, translated) {
        var _a;
        if (aufnahme == true) {
            console.log(counter);
            console.log(translated);
            console.log((_a = [translated], counter = _a[0], _a));
            for (var index = 0; index < 1; index++) {
                //playarray[index] = sound1;
                //sound1 = translated;
                switch (counter) {
                    case 0:
                        sound1 = translated;
                        console.log(sound1);
                        break;
                    case 1:
                        sound2 = translated;
                        console.log(sound2);
                        break;
                    case 2:
                        sound3 = translated;
                        console.log(sound3);
                        break;
                    case 3:
                        sound4 = translated;
                        console.log(sound4);
                        break;
                    case 4:
                        sound5 = translated;
                        console.log(sound5);
                        break;
                    case 5:
                        sound6 = translated;
                        console.log(sound6);
                        break;
                    case 6:
                        sound7 = translated;
                        console.log(sound7);
                        break;
                    case 7:
                        sound8 = translated;
                        console.log(sound8);
                        break;
                    case 8:
                        sound9 = translated;
                        console.log(sound9);
                        break;
                }
            }
            //let array: number [] = [translated];
        }
    }
    function random() {
        playSample("assets/sound_" + (Math.floor(Math.random() * 9) + 1) + ".mp3");
    }
    function mysound() {
        if (eigenerSound == true) {
            playSample("assets/sound_" + playarray[index++] + ".mp3");
            if (index == 9) {
                index = 0;
            }
        }
    }
    // function random(): void { //play 3 random samples
    //     var delay: number = 0;
    //     for (let index: number = 0; index < 1; index++) {
    //         setTimeout(function (): void { playSample("assets/sound_" + (Math.floor(Math.random() * 9) + 1) + ".mp3"); }, delay);
    //         delay += 1000;
    //     }
    // }
})(aufgabe_8 || (aufgabe_8 = {}));
//# sourceMappingURL=script.js.map