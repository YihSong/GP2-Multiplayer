#pragma strict

@script RequireComponent(ButtonPosition);

private var buttonPositionScript : ButtonPosition;
public var buttonSize : float = 1.0;

function Start() {
	buttonPositionScript = GetComponent(ButtonPosition);
}

function Update() {
	buttonPositionScript.buttonSize = buttonSize;
}