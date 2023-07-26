

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
	t.innerHTML =toFullWidth(tango);
	var s = document.getElementById("Setsumei");
	s.innerHTML = setsumei;
}
async function loadJson() {
	const request = new Request("./chu1.json");

	const response = await fetch(request);
	tangoList = await response.json();
	console.log(tangoList);
	SetValue();
}
function toFullWidth(value) {
	if (typeof value !== 'string') return value;

	return String(value).replace(/[!-~]/g, function(all) {
		return String.fromCharCode(all.charCodeAt(0) + 0xFEE0);
	});
};
loadJson(); 