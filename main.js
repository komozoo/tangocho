

let tango = "";
let setsumei = "";
let tangoList;
function voice(params) {
	if ("speechSynthesis" in window) {
    // 発言を作成
    const uttr = new SpeechSynthesisUtterance(tango);
	uttr.lang = "en-US";
    speechSynthesis.speak(uttr);
  }
}

function SetValue()
{
	tango = "hage";
	setsumei = "aaaaaaaaaaa";

	var t = document.getElementById("Tango");
  t.innerHTML = tango;
	var s = document.getElementById("Setsumei");
  s.innerHTML = setsumei;
}
async function populate() {
 const request = new Request("./chu1.json");

  const response = await fetch(request);
  const superHeroes = await response.json();
console.log(superHeroes);
}

populate(); 
SetValue();