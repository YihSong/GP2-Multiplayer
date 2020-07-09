@script RequireComponent(AudioSource)

var explodeClip : AudioClip;
var explodePrefab : GameObject;
private var object : GameObject;
private var script : PlayerTwoHealth;

function Start() {
	object = gameObject.Find("Game Controller");
	script = object.transform.gameObject.GetComponent("PlayerTwoHealth");
}

function OnCollisionEnter(collision : Collision) {
	if(collision.gameObject.tag == "Bullet 1") {
		Instantiate(explodePrefab, transform.position, transform.rotation);
		GetComponent.<AudioSource>().PlayClipAtPoint(explodeClip, transform.position);
		script.health -= 25;
		Destroy(collision.gameObject); // Destroy bullet
	}
}