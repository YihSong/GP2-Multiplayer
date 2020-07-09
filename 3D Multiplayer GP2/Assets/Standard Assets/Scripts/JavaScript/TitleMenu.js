import UnityEngine.SceneManagement;

#pragma strict

@script ExecuteInEditMode()

var play : GUIStyle;
var instructions : GUIStyle;
var credits : GUIStyle;
var exit : GUIStyle;

function OnGUI () {
	if(GUI.Button(Rect(900, 450, 182, 50), "PLAY", play))
		SceneManager.LoadScene("Game");
	if(GUI.Button(Rect(900, 500, 182, 50), "INSTRUCTIONS", instructions))
		SceneManager.LoadScene("Instructions");
	if(GUI.Button(Rect(900, 550, 182, 50), "CREDITS", credits))
		SceneManager.LoadScene("Credits");
	if(GUI.Button(Rect(900, 600, 182, 50), "EXIT", exit))
		Application.Quit();
}