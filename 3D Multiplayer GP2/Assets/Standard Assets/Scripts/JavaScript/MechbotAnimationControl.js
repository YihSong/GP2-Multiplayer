#pragma strict

// Animation control for Mechbot
function Start() {
	GetComponent.<Animation>()["walk_forward"].wrapMode = WrapMode.Loop;
	GetComponent.<Animation>()["walk_forward"].speed = 1;
}