#pragma strict

@script RequireComponent(GUIText);

function Update() {
	GetComponent.<GUIText>().text = "";
}