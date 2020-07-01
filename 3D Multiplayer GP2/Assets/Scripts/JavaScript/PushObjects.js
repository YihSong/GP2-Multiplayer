#pragma strict

var pushPower = 2.0;

function OnControllerColliderHit (hit : ControllerColliderHit) {
	var body : Rigidbody = hit.collider.attachedRigidbody;
	
	// No rigidbody
	if (body == null || body.isKinematic) {
		return;
	}

	// Avoid pushing objects below character controller
	if (hit.moveDirection.y < -0.3) {
		return;
	}
	
	// Calculate push direction from move direction
	// Only push objects to the sides never up and down
	var pushDir : Vector3 = Vector3 (hit.moveDirection.x, 0, hit.moveDirection.z);
	
	// Multiply the push velocity based on how fast character moves
	body.velocity = pushDir * pushPower;
}