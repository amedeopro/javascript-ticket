var km = prompt("Quanti kilometri devi percorrere?");

var eta = prompt("Quanti anni hai?");

var costoAlKm = 0.21;

if (eta < 18){

  var costoTotaleMinorenni = (costoAlKm * km) / 1.20;

  var dueDecimali = costoTotaleMinorenni.toFixed(2);

  document.getElementById('costo').innerHTML = dueDecimali;

} else if (eta > 65){
  var costoTotaleMinorenni = (costoAlKm * km) / 1.40;

  var dueDecimali = costoTotaleMinorenni.toFixed(2);

  document.getElementById('costo').innerHTML = dueDecimali;

} else {

  var costoTotaleMinorenni = (costoAlKm * km);

  var dueDecimali = costoTotaleMinorenni.toFixed(2);

  document.getElementById('costo').innerHTML = dueDecimali;

}
