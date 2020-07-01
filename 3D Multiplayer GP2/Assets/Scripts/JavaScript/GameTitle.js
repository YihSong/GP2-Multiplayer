#pragma strict

@script ExecuteInEditMode()

var customStyle : GUIStyle;

function OnGUI() {
	GUI.Label(Rect((Screen.width - 1000) * 0.5, 80, 1000, 100), "GAME TITLE", customStyle);
}