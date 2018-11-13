var km = prompt("Quanti kilometri devi percorrere?");

var eta = prompt("Quanti anni hai?");

var costoAlKm = 0.21;

// var costoTotale = km * costoAlKm;

if (eta < 18){

  var costoTotaleMinorenni = (costoAlKm * km) / 1.20;

  var n = costoTotaleMinorenni.toFixed(2);

  document.getElementById('costo').innerHTML = n;

} else {

  var costoTotaleMinorenni = (costoAlKm * km);

  var n = costoTotaleMinorenni.toFixed(2);

  document.getElementById('costo').innerHTML = n;

}

if (eta > 65){

  var costoTotaleOver = (costoAlKm * km) / 1.40;

  var n = costoTotaleOver.toFixed(2);

  document.getElementById('costo').innerHTML = n;

} else {

  var costoTotaleMinorenni = (costoAlKm * km);

  var n = costoTotaleMinorenni.toFixed(2);

  document.getElementById('costo').innerHTML = n;

}
