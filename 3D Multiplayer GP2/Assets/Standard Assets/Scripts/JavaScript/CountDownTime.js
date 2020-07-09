import UnityEngine.SceneManagement;

#pragma strict

@script ExecuteInEditMode()

private var startTime : float; // Time given to complete game
private var timeRemaining : float;
private var timeString : String;
var customStyle : GUIStyle;

function Start() {
	startTime = 300;
}

function Update() {
	CountDown();
}

function CountDown() {
	timeRemaining = startTime - Time.timeSinceLevelLoad;
	ShowTime();
	
	if(timeRemaining < 0) {
		timeRemaining = 0;
		TimeIsUp();
	}
}

function ShowTime() {
	var minutes : int;
	var seconds : int;
	
	minutes = timeRemaining / 60; // Derive minutes by dividing seconds by 60 seconds
	seconds = timeRemaining % 60; // Derive remainder after dividing by 60 seconds
	timeString = "TIME LEFT > " + minutes.ToString() + ":" + seconds.ToString("d2");
}

function TimeIsUp() {
	SceneManager.LoadScene("Lose");
}

function OnGUI() {
	GUI.Label(Rect((Screen.width - 300) * 0.5, 662, 300, 20), timeString, customStyle);
}