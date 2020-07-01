#pragma strict

@script ExecuteInEditMode()

var customStyle : GUIStyle;

function OnGUI() {
	GUI.Label(Rect(130, 332, 500, 100), "YOU WIN", customStyle);
}