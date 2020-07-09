private var object : GameObject;
private var tokenValue : int;
private var script : TokenScore;

function Start() {
	object = gameObject.Find("Game Control Center");
	script = object.transform.gameObject.GetComponent("TokenScore");
	tokenValue = 10;
}

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if(hit.gameObject.tag == "Token") {
		// Add token to score
		script.player1Score += tokenValue;
		// Destroy token object
		Destroy(hit.gameObject);
	}
}