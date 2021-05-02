namespace aufgabe_5{
var Afrika : String = "Afrika"
var Afrika08 : number = 1028;
var Afrika18 : number = 1235.5;

var Sued_Amerika : String="Süd Amerika";
var Sued_Amerika08 : number = 1132.6;
var Sued_Amerika18 : number = 1261.5;

var Europa : String="Europa";
var Europa08 : number = 4965.7;
var Europa18 : number = 4209.3;

var Nord_Amerika : String="Nord Amerika";
var Nord_Amerika08 : number = 6600.4;
var Nord_Amerika18 : number = 6035.6;

var Asien : String="Asien";
var Asien08 : number = 12954.7;
var Asien18 : number = 16274.1;

var Australien : String="Australien";
var Australien08 : number = 1993;
var Australien18 : number = 2100.5;

var Gesammtemmission18: number = Afrika18 + Sued_Amerika18 + Europa18 + Nord_Amerika18 + Asien18 + Australien18;



console.log("Die Emission von " + Afrika + " ist: " + Afrika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + Afrika + " damit " + Math.round((100/Gesammtemmission18)*Afrika18*100)/100 + "%");
console.log("Für " + Afrika + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Afrika18-Afrika08)/Afrika08*100*100)/100 +"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Afrika18-Afrika08)*100)/100 +"kg CO2");

console.log("Die Emission von " + Europa + " ist: " + Europa18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + Europa + " damit " + Math.round((100/Gesammtemmission18)*Europa18*100)/100 + "%");
console.log("Für " + Europa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Europa18-Europa08)/Europa08*100*100)/100 +"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Europa18-Europa08)*100)/100 +"kg CO2");

console.log("Die Emission von " + Australien + " ist: " + Australien18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + Australien + " damit " + Math.round((100/Gesammtemmission18)*Australien18*100)/100 + "%");
console.log("Für " + Australien + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Australien18-Australien08)/Australien08*100*100)/100 +"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Australien18-Australien08)*100)/100 +"kg CO2");

console.log("Die Emission von " + Asien + " ist: " + Asien18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + Asien + " damit " + Math.round((100/Gesammtemmission18)*Asien18*100)/100 + "%");
console.log("Für " + Asien + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Asien18-Asien08)/Asien08*100*100)/100 +"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Asien18-Asien08)*100)/100 +"kg CO2");

console.log("Die Emission von " + Nord_Amerika + " ist: " + Nord_Amerika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + Nord_Amerika + " damit " + Math.round((100/Gesammtemmission18)*Nord_Amerika18*100)/100 + "%");
console.log("Für " + Nord_Amerika + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Nord_Amerika18-Nord_Amerika08)/Nord_Amerika08*100*100)/100 +"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Nord_Amerika18-Nord_Amerika08)*100)/100 +"kg CO2");

console.log("Die Emission von " + Sued_Amerika + " ist: " + Sued_Amerika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + Sued_Amerika + " damit " + Math.round((100/Gesammtemmission18)*Sued_Amerika18*100)/100 + "%");
console.log("Für " + Sued_Amerika + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Sued_Amerika18-Sued_Amerika08)/Sued_Amerika08*100*100)/100 +"% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((Sued_Amerika18-Sued_Amerika08)*100)/100 +"kg CO2");
}