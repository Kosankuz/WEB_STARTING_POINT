///////////////////////
//input elements (labels)
//////////////////////
document.getElementById('token_name5').innerHTML = "TAS";

document.getElementById('glimval').innerHTML = "22000";
document.getElementById('gprice').innerHTML = "100";
document.getElementById('token_calc').innerHTML = "123123";


setInterval(function () {
  var input_value = document.getElementById('purchase_details_input').value;
var token_cal = input_value * 0.0431;
  document.getElementById('tokprice').innerHTML = input_value ;
}, 10);
