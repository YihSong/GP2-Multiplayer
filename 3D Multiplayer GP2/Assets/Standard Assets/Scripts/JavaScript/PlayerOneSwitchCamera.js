#pragma strict

private var i : int;
var camera1 : Camera;
var camera2 : Camera;

function Start() {
	camera1.enabled = true;
	camera2.enabled = false;
}

function Update() {
	if(Input.GetKeyDown("1")) {
		camera1.enabled = true;
		camera2.enabled = false;
	}

	if(Input.GetKeyDown("2")) {
		camera1.enabled = false;
		camera2.enabled = true;
	}
	
	if(Input.GetButtonDown("Switch (Player 1)")) {
		i += 1;
		if(i > 2)
			i = 1;
	}
	
	if(i == 1) {
		camera1.enabled = true;
		camera2.enabled = false;
	} else if(i == 2) {
		camera1.enabled = false;
		camera2.enabled = true;
	}
}