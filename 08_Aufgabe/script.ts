namespace aufgabe_8 {
    var translated: number;
    var myVar: number;
    var myVar1: number;
    let counter: number = 0;
    var aufnahme: boolean = false;
    let index: number = 0;
    let sound1: number = 1;
    let sound2: number = 2;
    let sound3: number = 3;
    let sound4: number = 4;
    let sound5: number = 5;
    let sound6: number = 6;
    let sound7: number = 7;
    let sound8: number = 8;
    let sound9: number = 9;
    var playarray: number [] = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
    var eigenerSound: boolean = false;
    window.addEventListener("load", function (): void { //Init mousedown events
        //Toggle random and play
        console.log(aufnahme);
        document.getElementById("trashBin").addEventListener("click", function (): void {
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
        document.getElementById("playButton").addEventListener("click", function (): void {
            this.classList.add("is-hidden");
            document.getElementById("pauseButton").classList.remove("is-hidden");
            clearInterval(myVar1);
            eigenerSound = false;
            console.log(eigenerSound);
        });

        document.getElementById("pauseButton").addEventListener("click", function (): void {
            this.classList.add("is-hidden");
            document.getElementById("playButton").classList.remove("is-hidden");
            myVar1 = setInterval(mysound, 500);
            eigenerSound = true;
            console.log(eigenerSound);
        });
        document.getElementById("randomZ").addEventListener("click", function (): void {
            this.classList.add("is-hidden");
            document.getElementById("randomPlay").classList.remove("is-hidden");
            myVar = setInterval(random, 500);
        });

        document.getElementById("randomPlay").addEventListener("click", function (): void {
            this.classList.add("is-hidden");
            document.getElementById("randomZ").classList.remove("is-hidden");
            clearInterval(myVar);
        });
        document.getElementById("mic").addEventListener("click", function (): void {
            this.classList.add("is-hidden");
            document.getElementById("micDeactivated").classList.remove("is-hidden");
            aufnahme = false;
            console.log(aufnahme);
        });
        document.getElementById("micDeactivated").addEventListener("click", function (): void {
            this.classList.add("is-hidden");
            document.getElementById("mic").classList.remove("is-hidden");
            aufnahme = true;
            console.log(aufnahme);

        });

        let array: number[] = [];
        for (let num: number = 1; num <= 9; num++) { //Init mousedown events
            document.querySelector("#pad" + num).addEventListener("mousedown", function (): void { playSample("assets/sound_" + num + ".mp3"); }); //Init mousedown events

            document.querySelector("#pad" + num).addEventListener("mousedown", function (): void { if (aufnahme == true && counter <= 8) { countup(counter++, num); } else { counter = 0; countup(counter++, num); } });
        } //Init mousedown events

        let translate: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3];
        var add: number = 96;
        for (let num: number = 1; num <= 9; num++) { //ubersetzung auf Tastatur
            document.addEventListener("keydown", function (event: KeyboardEvent): void { //ubersetzung auf Tastatur
                if (event.keyCode == add + num) {
                    translated = translate[num - 1];
                    playSample("assets/sound_" + translate[num - 1] + ".mp3");
                    if (aufnahme == true && counter <= 8) { countup(counter++, translated); countup(counter++, num); }
                    else { counter = 0; }
                }
            });
        }
    });
    function playSample(samples: string): void { //play Sample funktion
        var sound: HTMLAudioElement = new Audio(samples);
        sound.play();
    }
    function countup(counter: number, translated: number): void {
 if (aufnahme == true) {
        console.log(counter);
        console.log(translated);
        console.log([counter] = [translated]);
        for (var index: number = 0; index < 1; index++) {
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

    function random(): void { //play my samples
        playSample("assets/sound_" + (Math.floor(Math.random() * 9) + 1) + ".mp3");
    }
    function mysound(): void {
        if (eigenerSound == true) {
            playSample("assets/sound_" + playarray[index++] + ".mp3");
            if (index == 9) {index = 0; }
        }
    }
    // function random(): void { //play 3 random samples
    //     var delay: number = 0;
    //     for (let index: number = 0; index < 1; index++) {
    //         setTimeout(function (): void { playSample("assets/sound_" + (Math.floor(Math.random() * 9) + 1) + ".mp3"); }, delay);
    //         delay += 1000;
    //     }

    // }
}
