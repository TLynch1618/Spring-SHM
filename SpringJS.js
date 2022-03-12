let animation1 = anime({
	targets: '#mass',
	translateX: 300,
	direction: 'alternate',
	loop: false,
	easing: 'spring(10, 10, 1, 0)',
	autoplay: false,
});

let animation2 = anime({
	targets: '#spring',
	width: [50, 350],
	direction: 'alternate',
	loop: false,
	easing: 'spring(10, 10, 1, 0)',
	autoplay: false,
});

function play1() {
	return animation1.play;
}

function play2() {
	return animation2.play;
}

document.getElementById("play").addEventListener("click", play1());
document.getElementById("play").addEventListener("click", play2());

function pause1() {
	return animation1.pause;
}

function pause2() {
	return animation2.pause;
}

document.getElementById("pause").addEventListener("click", pause1());
document.getElementById("pause").addEventListener("click", pause2());

function reset1() {
	return animation1.reset;
}

function reset2() {
	return animation2.reset;
}

document.getElementById("reset").addEventListener("click", reset1());
document.getElementById("reset").addEventListener("click", reset2());