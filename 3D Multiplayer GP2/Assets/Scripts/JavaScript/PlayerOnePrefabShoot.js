#pragma strict

var projectile : Rigidbody;
private var speed : int;
private var ammo : int;
var fireClip : AudioClip;

function Start() {
	speed = 18;
	ammo = 100;
}

function Update () {
	if(Input.GetButtonDown("Fire1 (Player 1)")) {
		var projectileClone : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
		GetComponent.<AudioSource>().PlayClipAtPoint(fireClip, transform.position);
		projectileClone.velocity = transform.TransformDirection(Vector3(0, 0, speed));
		Destroy(projectileClone.gameObject, 0.15);
		ammo--;
	}
}