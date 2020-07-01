#pragma strict

@script ExecuteInEditMode()

var customStyle : GUIStyle;

function OnGUI() {
	GUI.Label(Rect(600, 327, 500, 100), "YOU LOSE", customStyle);
}