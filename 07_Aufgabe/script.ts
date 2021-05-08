namespace aufgabe_7 {

    window.addEventListener("load", function () { //Init mousedown events
        for (let num = 1; num <= 9; num++) { //Init mousedown events
            document.querySelector("#pad" + num).addEventListener("mousedown", function () { playSample("assets/sound_" + num + ".mp3"); }); //Init mousedown events
        }
        document.querySelector("#play3Samples").addEventListener("mousedown", function () { play3Samples(); });   //Init mousedown event playbutten

        //document.querySelector("#pad1").addEventListener("mousedown", function(){playSample("assets/sound_1.mp3");}); //Block der mit  init for Schleife vereinfacht wurde
        // document.querySelector("#pad2").addEventListener("mousedown", function(){playSample("assets/sound_2.mp3");});
        // document.querySelector("#pad3").addEventListener("mousedown", function(){playSample("assets/sound_3.mp3");});
        // document.querySelector("#pad4").addEventListener("mousedown", function(){playSample("assets/sound_4.mp3");});
        // document.querySelector("#pad5").addEventListener("mousedown", function(){playSample("assets/sound_5.mp3");});
        // document.querySelector("#pad6").addEventListener("mousedown", function(){playSample("assets/sound_6.mp3");});
        // document.querySelector("#pad7").addEventListener("mousedown", function(){playSample("assets/sound_7.mp3");});
        // document.querySelector("#pad8").addEventListener("mousedown", function(){playSample("assets/sound_8.mp3");});
        // document.querySelector("#pad9").addEventListener("mousedown", function(){playSample("assets/sound_9.mp3");});
        let translate: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3];
        var add: number = 96;
        for (let num:number = 1; num <= 9; num++) { //ubersetzung auf Tastatur
            document.addEventListener('keydown', function (event:KeyboardEvent) { //ubersetzung auf Tastatur
                if (event.keyCode == add + num) {
                    playSample("assets/sound_" + translate[num - 1] + ".mp3");
                }
            });
        }
    });

    var x = document.getElementById("pad1").innerText;

    function playSample(samples: string): void { //play Sample funktion
        var sound: HTMLAudioElement = new Audio(samples);
        sound.play();
    };
    function play3Samples() {  //play 3 Samples funktion
        var delay: number = 0;
        for (let sound = 7; sound <= 9; sound++) {
            setTimeout(function () { playSample("assets/sound_" + sound + ".mp3"); }, delay);
            delay = delay + 500;
            console.log("assets/sound_" + sound + ".mp3")
        }
    };

}
