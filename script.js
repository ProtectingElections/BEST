var ballot = document.getElementById("slider_ballot");
ballot.oninput = function () { document.getElementById("display_ballot").innerHTML = this.value; };
var describe = document.getElementById("slider_describe");
describe.oninput = function () { document.getElementById("display_describe").innerHTML = this.value; };
var geo = document.getElementById("slider_geo");
geo.oninput = function () { document.getElementById("display_geo").innerHTML = this.value; };
var ind = document.getElementById("slider_ind");
ind.oninput = function () { document.getElementById("display_ind").innerHTML = this.value; };
var gov = document.getElementById("slider_gov");
gov.oninput = function () { document.getElementById("display_gov").innerHTML = this.value; };
var boundary = document.getElementById("slider_boundary");
boundary.oninput = function () { document.getElementById("display_boundary").innerHTML = this.value; };
var strategic = document.getElementById("slider_strategic");
strategic.oninput = function () { document.getElementById("display_strategic").innerHTML = this.value; };
var waste = document.getElementById("slider_waste");
waste.oninput = function () { document.getElementById("display_waste").innerHTML = this.value; };
var women = document.getElementById("slider_women");
women.oninput = function () { document.getElementById("display_women").innerHTML = this.value; };
var explain = document.getElementById("slider_explain");
explain.oninput = function () { document.getElementById("display_explain").innerHTML = this.value; };
var easy = document.getElementById("slider_easy");
easy.oninput = function () { document.getElementById("display_easy").innerHTML = this.value; };
var turnout = document.getElementById("slider_turnout");
turnout.oninput = function () { document.getElementById("display_turnout").innerHTML = this.value; };
var link = document.getElementById("slider_link");
link.oninput = function () { document.getElementById("display_link").innerHTML = this.value; };
var pork = document.getElementById("slider_pork");
pork.oninput = function () { document.getElementById("display_pork").innerHTML = this.value; };
var oppose = document.getElementById("slider_oppose");
oppose.oninput = function () { document.getElementById("display_oppose").innerHTML = this.value; };
var extreme = document.getElementById("slider_extreme");
extreme.oninput = function () { document.getElementById("display_extreme").innerHTML = this.value; };
var output = document.getElementById("demo");
var button = document.getElementById("calculate");
var weights = math.matrix([
[10, 8, 4, 3, 5, 6, 8, 4, 10, 5, 4, 4],
[9, 7, 4, 3, 5, 7, 1, 1, 5, 1, 7, 6],
[4, 4, 10, 10, 10, 5, 6, 6, 4, 5, 8, 8],
[3, 8, 10, 9, 8, 8, 7, 7, 1, 7, 6, 7],
[5, 5, 10, 8, 6, 5, 6, 6, 8, 6, 5, 5],
[10, 10, 1, 1, 1, 10, 10, 10, 10, 10, 5, 5],
[9, 8, 5, 3, 2, 5, 2, 2, 9, 2, 5, 7],
[10, 10, 2, 4, 6, 9, 1, 3, 1, 2, 9, 8],
[10, 8, 1, 1, 4, 4, 1, 1, 5, 4, 6, 6],
[6, 5, 10, 8, 3, 2, 8, 6, 8, 7, 2, 3],
[9, 7, 9, 5, 4, 4, 9, 9, 9, 9, 6, 7],
[8, 8, 6, 5, 7, 8, 4, 4, 4, 4, 7, 7],
[4, 5, 8, 8, 8, 6, 5, 5, 1, 5, 7, 7],
[10, 8, 1, 1, 5, 5, 5, 5, 7, 5, 6, 6],
[9, 9, 4, 4, 5, 6, 3, 3, 6, 3, 6, 6],
[2, 2, 10, 10, 10, 4, 6, 7, 9, 6, 5, 5],
],);
button.onclick = function () {
var preference_vector = math.matrix([
ballot.value,
describe.value,
geo.value,
ind.value,
gov.value,
boundary.value,
strategic.value,
waste.value,
women.value,
explain.value,
easy.value,
turnout.value,
link.value,
pork.value,
oppose.value,
extreme.value]);
var res = math.multiply(math.transpose(weights), preference_vector);
document.getElementById("prclosed").innerHTML = Math.trunc((res.get([0]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("propen").innerHTML = Math.trunc((res.get([1]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("fptp").innerHTML = Math.trunc((res.get([2]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("trs").innerHTML = Math.trunc((res.get([3]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("av").innerHTML = Math.trunc((res.get([4]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("stv").innerHTML = Math.trunc((res.get([5]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("sntv").innerHTML = Math.trunc((res.get([6]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("bv").innerHTML = Math.trunc((res.get([7]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("pbv").innerHTML = Math.trunc((res.get([8]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("lv").innerHTML = Math.trunc((res.get([9]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("mmp").innerHTML = Math.trunc((res.get([10]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("parallel").innerHTML = Math.trunc((res.get([11]) / math.sum(res)).toFixed(2) * 100) + "%";
document.getElementById("results").style.display = "block";
}