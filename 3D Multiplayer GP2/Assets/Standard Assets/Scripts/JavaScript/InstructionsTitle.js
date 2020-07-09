#pragma strict

@script ExecuteInEditMode()

var customStyle1 : GUIStyle;
var customStyle2 : GUIStyle;

function OnGUI() {
	GUI.Label(Rect(570, 372, 600, 100), "INSTRUCTIONS", customStyle1);
	GUI.Label(Rect(573, 417, 600, 100), "Button A > Shield", customStyle2);
	GUI.Label(Rect(573, 452, 600, 100), "Button B > Fire", customStyle2);
}