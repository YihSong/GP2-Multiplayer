#pragma strict

private var rayCastLength = 0.5;
private var hit : RaycastHit;
var gateClip : AudioClip;
private var gateMove : boolean = false;
private var object : GameObject;

function Start() {
	object = gameObject.FindWithTag("Gate");
}

function Update() {
	var forward : Vector3 = transform.TransformDirection(Vector3.forward) * rayCastLength;
	Debug.DrawRay(transform.position, forward, Color.white);
	
	// Check player collision using raycast
	if(Physics.Raycast(transform.position, transform.forward, hit, rayCastLength)) {
		// Check if gameObject is gate
		if(hit.collider.gameObject.tag == "Gate" && gateMove == false) {
			gateMove = true;
			if(GetComponent.<AudioSource>()) {
				GetComponent.<AudioSource>().clip = gateClip;
				GetComponent.<AudioSource>().Play();
			}
			print("Open Gate");
			// Open gate
			hit.collider.gameObject.GetComponent.<Animation>().Play("GateOpen");
		}
		
		if(hit.collider.gameObject.tag == "Sensor" && gateMove == true) {
			gateMove = false;
			if(GetComponent.<AudioSource>()) {
				GetComponent.<AudioSource>().clip = gateClip;
				GetComponent.<AudioSource>().Play();
			}
			print("Close Gate");
			// Close gate
			object.GetComponent.<Animation>().Play("GateClose");
		}
	}
}