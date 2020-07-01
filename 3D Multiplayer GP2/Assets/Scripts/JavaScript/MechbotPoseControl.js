#pragma strict

// Animation control for Mechbot
function Start() {
	GetComponent.<Animation>()["idle"].wrapMode = WrapMode.Loop;
	GetComponent.<Animation>()["idle"].speed = 0.5;
}