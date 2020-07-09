#pragma strict

@script RequireComponent(AudioSource)

var explodeClip : AudioClip;
var explodePrefab : GameObject;

function OnCollisionEnter(collision : Collision) {
	if(collision.gameObject.tag == "Bullet 1" || collision.gameObject.tag == "Bullet 2") {
		Instantiate(explodePrefab, transform.position, transform.rotation);
		GetComponent.<AudioSource>().PlayClipAtPoint(explodeClip, transform.position);
		Destroy(gameObject);
		Destroy(collision.gameObject);
	}
}