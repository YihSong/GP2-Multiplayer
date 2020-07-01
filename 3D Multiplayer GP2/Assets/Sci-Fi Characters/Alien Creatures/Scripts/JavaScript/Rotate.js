public var rotationSpeedX : float = 0;
public var rotationSpeedY : float = 15;
public var rotationSpeedZ : float = 0;

function Update() {
	transform.Rotate(Vector3(rotationSpeedX, rotationSpeedY, rotationSpeedZ) * Time.deltaTime);
}