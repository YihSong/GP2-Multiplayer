private var range : float;
private var force : float = 10.0;
private var hit : RaycastHit;
var laserTrail : Rigidbody;
private var speed : int;
var explosionPrefab : GameObject;
var fireClip : AudioClip;
var explodeClip : AudioClip;
private var object : GameObject;
private var script : PlayerOneHealth;

function Start() {
	speed = 10;
	range = 2.6;
	object = gameObject.Find("Game Control Center");
	script = object.transform.gameObject.GetComponent("PlayerOneHealth");
}

function Update() {
	if(Input.GetButtonDown("Fire1 (Player 2)")) {
		Fire();
	}
}

function Fire() {
	var laserTrailClone : Rigidbody = Instantiate(laserTrail, transform.position, transform.rotation);
	var leftDirection : Vector3 = transform.TransformDirection(Vector3(0.07, 0, 1));
	var rightDirection : Vector3 = transform.TransformDirection(Vector3(-0.07, 0, 1));
	var hitRotation : Quaternion = Quaternion.FromToRotation(Vector3.up, hit.normal);
	
	// Check if raycast hit anything
	if(this.name == "Left Gun") {
		// Laser trail
		laserTrailClone.velocity = transform.TransformDirection(Vector3(0.07, 0, 1) * speed);
		Destroy(laserTrailClone.gameObject, 0.26);
		
		Debug.DrawRay(transform.position, leftDirection * range, Color.white);
		GetComponent.<AudioSource>().PlayClipAtPoint(fireClip, transform.position);
		if(Physics.Raycast(transform.position, leftDirection, hit, range)) {
			if(hit.collider.gameObject.tag == "Enemy 1" || hit.collider.gameObject.tag == "Enemy 2" || hit.collider.gameObject.tag == "Enemy 3") {
				Destroy(hit.collider.gameObject);
				Instantiate(explosionPrefab, hit.transform.position, transform.rotation);
				GetComponent.<AudioSource>().PlayClipAtPoint(explodeClip, transform.position);
			}

			if(hit.collider.gameObject.tag == "Player") {
				if(script.health != 0)
					script.health -= 100;
				else
					script.health = 0;
			}
		}
	}
	
	if(this.name == "Right Gun") {
		// Laser trail
		laserTrailClone.velocity = transform.TransformDirection(Vector3(-0.07, 0, 1) * speed);
		Destroy(laserTrailClone.gameObject, 0.26);
		
		Debug.DrawRay(transform.position, rightDirection * range, Color.white);
		if(Physics.Raycast(transform.position, rightDirection, hit, range)) {
			if(hit.collider.gameObject.tag == "Enemy") {
				Destroy(hit.collider.gameObject);
			}
		}
	}
}