namespace aufgabe_6{
var Afrika : string = "Africa";
var Afrika08 : number = 1028;
var Afrika18 : number = 1235.5;

var Sued_Amerika : string = "south America";
var Sued_Amerika08 : number = 1132.6;
var Sued_Amerika18 : number = 1261.5;

var Europa : string = "Europe";
var Europa08 : number = 4965.7;
var Europa18 : number = 4209.3;

var Nord_Amerika : string = "north America";
var Nord_Amerika08 : number = 6600.4;
var Nord_Amerika18 : number = 6035.6;

var Asien : string = "Asia";
var Asien08 : number = 12954.7;
var Asien18 : number = 16274.1;

var Australien : string = "Australia";
var Australien08 : number = 1993;
var Australien18 : number = 2100.5;

var Gesammtemmission18: number = Afrika18 + Sued_Amerika18 + Europa18 + Nord_Amerika18 + Asien18 + Australien18;

window.addEventListener("load", function() {

    document.querySelector(".Afrika").addEventListener("click" , function() { Emissionen(Afrika, Afrika08, Afrika18)});
    document.querySelector(".Asien").addEventListener("click" , function() { Emissionen( Asien, Asien08, Asien18)});
    document.querySelector(".Australien").addEventListener("click" , function() { Emissionen(Australien, Australien08, Australien18)});
    document.querySelector(".Europa").addEventListener("click" , function() { Emissionen(Europa, Europa08, Europa18)});
    document.querySelector(".Nord_Amerika").addEventListener("click" , function() { Emissionen(Nord_Amerika, Nord_Amerika08, Nord_Amerika18)});
    document.querySelector(".Sued_Amerika").addEventListener("click" , function() { Emissionen(Sued_Amerika, Sued_Amerika08, Sued_Amerika18)});
});
    function Emissionen (Kontinent: string, Kontinent2008 :number, Kontinent2018:number) {
        document.querySelector(".Kontinent_1").innerHTML = Kontinent;
        document.querySelector(".Kontinent_2").innerHTML = Kontinent;
        document.querySelector(".emission2018").innerHTML = Kontinent2018.toString() + "kg";
        document.querySelector(".relativeTotal").innerHTML = Math.round((100/Gesammtemmission18)*Kontinent2018*100)/100 +"%";
        document.querySelector(".between2008_2018").innerHTML = Math.round((Kontinent2018-Kontinent2008)/Kontinent2008*100*100)/100 +"%";
        document.querySelector(".growthRate").innerHTML = Math.round((Kontinent2018-Kontinent2008)*100)/100 +"kg";
};
// console.log("Die Emission von " + Afrika + " ist: " + Afrika18 + "kg CO2");
// console.log("Relativ zur Gesamtemission der Welt verursacht " + Afrika + " damit " + Math.round((100/Gesammtemmission18)*Afrika18*100)/100 + "%");
// console.log("Für " + Afrika + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Afrika18-Afrika08)/Afrika08*100*100)/100 +"% verändert");
// console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Afrika18-Afrika08)*100)/100 +"kg CO2");

// console.log("Die Emission von " + Europa + " ist: " + Europa18 + "kg CO2");
// console.log("Relativ zur Gesamtemission der Welt verursacht " + Europa + " damit " + Math.round((100/Gesammtemmission18)*Europa18*100)/100 + "%");
// console.log("Für " + Europa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Europa18-Europa08)/Europa08*100*100)/100 +"% verändert");
// console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Europa18-Europa08)*100)/100 +"kg CO2");

// console.log("Die Emission von " + Australien + " ist: " + Australien18 + "kg CO2");
// console.log("Relativ zur Gesamtemission der Welt verursacht " + Australien + " damit " + Math.round((100/Gesammtemmission18)*Australien18*100)/100 + "%");
// console.log("Für " + Australien + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Australien18-Australien08)/Australien08*100*100)/100 +"% verändert");
// console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Australien18-Australien08)*100)/100 +"kg CO2");

// console.log("Die Emission von " + Asien + " ist: " + Asien18 + "kg CO2");
// console.log("Relativ zur Gesamtemission der Welt verursacht " + Asien + " damit " + Math.round((100/Gesammtemmission18)*Asien18*100)/100 + "%");
// console.log("Für " + Asien + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Asien18-Asien08)/Asien08*100*100)/100 +"% verändert");
// console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Asien18-Asien08)*100)/100 +"kg CO2");

// console.log("Die Emission von " + Nord_Amerika + " ist: " + Nord_Amerika18 + "kg CO2");
// console.log("Relativ zur Gesamtemission der Welt verursacht " + Nord_Amerika + " damit " + Math.round((100/Gesammtemmission18)*Nord_Amerika18*100)/100 + "%");
// console.log("Für " + Nord_Amerika + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Nord_Amerika18-Nord_Amerika08)/Nord_Amerika08*100*100)/100 +"% verändert");
// console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Nord_Amerika18-Nord_Amerika08)*100)/100 +"kg CO2");

// console.log("Die Emission von " + Sued_Amerika + " ist: " + Sued_Amerika18 + "kg CO2");
// console.log("Relativ zur Gesamtemission der Welt verursacht " + Sued_Amerika + " damit " + Math.round((100/Gesammtemmission18)*Sued_Amerika18*100)/100 + "%");
// console.log("Für " + Sued_Amerika + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Sued_Amerika18-Sued_Amerika08)/Sued_Amerika08*100*100)/100 +"% verändert");
// console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Sued_Amerika18-Sued_Amerika08)*100)/100 +"kg CO2");
}