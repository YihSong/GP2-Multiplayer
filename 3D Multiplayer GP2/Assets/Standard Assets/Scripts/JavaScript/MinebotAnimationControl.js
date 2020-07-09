#pragma strict

// Animation control for Minibot
function Start() {
	GetComponent.<Animation>()["forward"].wrapMode = WrapMode.Loop;
	GetComponent.<Animation>()["forward"].speed = 1;
}