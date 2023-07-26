

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
	
	let idx =Math.floor(Math.random() * tangoList.length);


	tango = tangoList[idx].単語;
	setsumei = tangoList[idx].意味;

	var t = document.getElementById("Tango");
	t.innerHTML =tango;
	var s = document.getElementById("Setsumei");
	s.innerHTML = setsumei;
}

async function Init(jsonUrl) {
	const request = new Request(jsonUrl);

	const response = await fetch(request);
	tangoList = await response.json();
	console.log(tangoList);
	SetValue();
}