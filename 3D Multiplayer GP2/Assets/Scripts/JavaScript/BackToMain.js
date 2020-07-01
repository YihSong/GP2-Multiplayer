import UnityEngine.SceneManagement;

@script ExecuteInEditMode()

var backToMain : GUIStyle;

function OnGUI () {
	if(GUI.Button(Rect(1000, 650, 200, 50), "BACK TO MAIN", backToMain))
		SceneManager.LoadScene("Title");
}