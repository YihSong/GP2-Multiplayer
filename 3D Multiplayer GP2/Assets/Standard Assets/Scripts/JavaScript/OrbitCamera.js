var target : Transform;
var edgeBorder : float = 0.1;
var horizontalSpeed : float = 360.0;
var verticalSpeed : float = 120.0;
var minVertical : float = 20.0;
var maxVertical : float = 85.0;

private var x : float = 0.0;
private var y : float = 0.0;
private var distance : float = 0.0;

function Start() {
	x = transform.eulerAngles.y;
	y = transform.eulerAngles.x;
	distance = (transform.position - target.position).magnitude;
}

function LateUpdate() {
	var dt = Time.deltaTime;
	x -= Input.GetAxis("Orbit X") * horizontalSpeed * dt;
//	y += Input.GetAxis("Vertical") * verticalSpeed * dt;
	
	y = ClampAngle(y, minVertical, maxVertical);
	
	var rotation = Quaternion.Euler(y, x, 0);
	var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
	
	transform.rotation = rotation;
	transform.position = position;
}

static function ClampAngle (angle : float, min : float, max : float) {
	if(angle < -360)
		angle += 360;
	if(angle > 360)
		angle -= 360;
	return Mathf.Clamp(angle, min, max);
}