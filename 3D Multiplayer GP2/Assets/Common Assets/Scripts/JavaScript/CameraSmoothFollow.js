/*
This camera smoothes out rotation around the y-axis and height.
Horizontal Distance to the target is always fixed.

There are many different ways to smooth the rotation but doing it this way gives you a lot of control over how the camera behaves.

For every of those smoothed values we calculate the wanted value and the current value.
Then we smooth it using the Lerp function.
Then we apply the smoothed values to the transform's position.
*/

// Target following
var target : Transform;
// Distance in x-z plane to target
var distance = 3.0;
// Height at which camera above target
var height = 1.0;
var heightDamping = 2.0;
var rotationDamping = 3.0;

function LateUpdate () {
	// Early out if we don't have a target
	if (!target)
		return;
	
	// Calculate current rotation angles
	wantedRotationAngle = target.eulerAngles.y;
	wantedHeight = target.position.y + height;
	
	currentRotationAngle = transform.eulerAngles.y;
	currentHeight = transform.position.y;
	
	// Dampen rotation around the y-axis
	currentRotationAngle = Mathf.LerpAngle (currentRotationAngle, wantedRotationAngle, rotationDamping * Time.deltaTime);
	
	// Dampen height
	currentHeight = Mathf.Lerp(currentHeight, wantedHeight, heightDamping * Time.deltaTime);
	
	// Convert angle into rotation
	currentRotation = Quaternion.Euler(0, currentRotationAngle, 0);
	
	// Set position of camera on x-z plane to distance behind the target
	transform.position = target.position;
	transform.position -= currentRotation * Vector3.forward * distance;
	
	// Set height of camera
	transform.position.y = currentHeight;
	
	// Look at target
	transform.LookAt (target);
}