@script RequireComponent(AudioSource)

var explodeClip : AudioClip;
var explodePrefab : GameObject;
private var object : GameObject;
private var script : PlayerOneHealth;

function Start() {
	object = gameObject.Find("Game Control Center");
	script = object.transform.gameObject.GetComponent("PlayerOneHealth");
}

function OnCollisionEnter(collision : Collision) {
	if(collision.gameObject.tag == "Bullet 2") {
		Instantiate(explodePrefab, transform.position, transform.rotation);
		GetComponent.<AudioSource>().PlayClipAtPoint(explodeClip, transform.position);
		script.health -= 25;
		Destroy(collision.gameObject); // Destroy bullet
	}
}