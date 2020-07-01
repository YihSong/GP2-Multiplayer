#pragma strict

public var speed : float = 2.0;
private var spaceshipController : CharacterController;
private var moveDirection : Vector3 = Vector3.zero;
private var gravity = 0.4;

function Start () {
	spaceshipController = GetComponent(CharacterController);
	//GetComponent.<Animation>().wrapMode = WrapMode.Loop;
}

function Update() {
	if(spaceshipController.isGrounded) {
		moveDirection = Vector3(0, 0, Input.GetAxis("Vertical"));
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
	}
	
	transform.eulerAngles.y += Input.GetAxis("Horizontal") * 5;
	moveDirection.y -= gravity * Time.deltaTime;
	spaceshipController.Move(moveDirection * Time.deltaTime);
}