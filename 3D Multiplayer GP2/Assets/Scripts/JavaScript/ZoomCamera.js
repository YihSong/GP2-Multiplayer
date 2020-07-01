#pragma strict

private var orthographicSizeMin : int;
private var orthographicSizeMax : int;

function Start() {
	orthographicSizeMin = 2;
	orthographicSizeMax = 10;
}

function Update () {
	if (Input.GetAxis("Zoom") > 0 || Input.GetAxis("Mouse ScrollWheel") > 0) { // Zoom forward
		Camera.main.orthographicSize--;
	}
	
	if (Input.GetAxis("Zoom") < 0 || Input.GetAxis("Mouse ScrollWheel") < 0) { // Zoom backward
		Camera.main.orthographicSize++;
	}
	
	Camera.main.orthographicSize = Mathf.Clamp(Camera.main.orthographicSize, orthographicSizeMin, orthographicSizeMax);
}