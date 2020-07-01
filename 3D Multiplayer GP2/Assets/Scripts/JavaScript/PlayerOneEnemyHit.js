private var object : GameObject;
private var script : PlayerOneHealth;

function Start() {
	object = gameObject.Find("Game Controller");
	script = object.transform.gameObject.GetComponent("PlayerOneHealth");
}

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if(hit.gameObject.tag == "Enemy 1") {
		// Deduct health for damage dealt by enemy type
		script.health -= 100;
		// Destroy enemy object upon collision
		Destroy(hit.gameObject);
	}
	
	if(hit.gameObject.tag == "Enemy 2") {
		script.health -= 200;
		Destroy(hit.gameObject);
	}
	
	if(hit.gameObject.tag == "Enemy 3") {
		script.health -= 300;
		Destroy(hit.gameObject);
	}
}