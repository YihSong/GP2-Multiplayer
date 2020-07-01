//#pragma strict

@script ExecuteInEditMode()

var healthBar : Texture2D[];
private var i : int;
var health : int;
var customStyle : GUIStyle;

function Start() {
	i = 8;
	health = 800;
}

function Update() {
	if(health > 700) {
		i = 8;
		return;
	} else if(health > 600) {
		i = 7;
		return;
	} else if(health > 500) {
		i = 6;
		return;
	} else if(health > 400) {
		i = 5;
		return;
	} else if(health > 300) {
		i = 4;
		return;
	} else if(health > 200) {
		i = 3;
		return;
	} else if(health > 100) {
		i = 2;
		return;
	} else if(health > 0) {
		i = 1;
		return;
	} else if (health <= 0) {
		i = 0;
		health = 0;
		//Application.LoadLevel("Lose");
	}
}

function OnGUI() {
	GUI.Label(Rect(680, 10, 128, 64), healthBar[i]);
	GUI.Label(Rect(695, 36, 80, 20), health.ToString(), customStyle);
}