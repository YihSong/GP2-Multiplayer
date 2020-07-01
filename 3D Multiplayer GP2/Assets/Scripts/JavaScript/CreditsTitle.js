#pragma strict

@script ExecuteInEditMode()

var customStyle1 : GUIStyle;
var customStyle2 : GUIStyle;

function OnGUI() {
	GUI.Label(Rect((Screen.width - 600) * 0.5, 362, 600, 100), "CREDITS", customStyle1);
	GUI.Label(Rect((Screen.width - 1000) * 0.5, 402, 1000, 100), "STUDENT 1 NAME | STUDENT 1 ID | CLASS", customStyle2);
	GUI.Label(Rect((Screen.width - 1000) * 0.5, 432, 1000, 100), "STUDENT 2 NAME | STUDENT 2 ID | CLASS", customStyle2);
}