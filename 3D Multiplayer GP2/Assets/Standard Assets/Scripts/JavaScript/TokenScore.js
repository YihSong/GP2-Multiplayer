#pragma strict

@script ExecuteInEditMode()

var player1Score : int;
var player2Score : int;
var customStyle : GUIStyle;

function Start () {
//	Screen.showCursor = false;
	player1Score = 0;
	player2Score = 0;
}

function OnGUI() {
	GUI.Label(Rect(5, 580, 200, 50), "SCORE > " + player1Score, customStyle);
	GUI.Label(Rect(1040, 580, 200, 50), "SCORE > " + player2Score, customStyle);
}