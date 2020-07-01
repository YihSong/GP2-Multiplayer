#pragma strict

public var actions : String[];
public var indexAction : int;
public var statusGUI : GUIText;
public var speed : float = 1.5;
private var policeController : CharacterController;
private var jumpSpeed : float = 5;
private var moveDirection : Vector3 = Vector3.zero;
private var boostIncr = 1;
private var canAnimate : boolean;
private var gravity = 15;
private var run : boolean = false;
private var rotateY : float;

function Start () {
	indexAction = 0;
	statusGUI.text = actions[indexAction];
	policeController = GetComponent(CharacterController);
	GetComponent.<Animation>().wrapMode = WrapMode.Loop;
	GetComponent.<Animation>()["Standing and aiming"].wrapMode = WrapMode.Once;
	GetComponent.<Animation>()["Crouching and aiming"].wrapMode = WrapMode.Once;
	GetComponent.<Animation>()["Standing with single fire"].wrapMode = WrapMode.Once;
	GetComponent.<Animation>()["Idle crouching with single fire"].wrapMode = WrapMode.Once;
}

function Update() {
	if(Input.GetButtonDown("Boost")) {
		run = true;
	}
	else if(Input.GetButtonUp("Boost")) {
		run = false;
	}
	
	if(!Input.GetButtonDown("Action")) {
		canAnimate = true;
	}
	
	if(Input.GetButtonDown("Switch")) {
		indexAction++;
		if(indexAction == actions.length)
			indexAction = 0;
		statusGUI.text = actions[indexAction];
	}
	
	if(policeController.isGrounded == true) {
		if(Input.GetAxis("Vertical") > 0.02 && !Input.GetKey("left ctrl")) {
			GetComponent.<Animation>()["Walking"].speed = 1;
			if(run) {
				GetComponent.<Animation>().CrossFade("Running");
				GetComponent.<Animation>()["Running"].speed = 1;
				boostIncr = 3;
			}
			else {
				GetComponent.<Animation>().CrossFade("Walking");
				boostIncr = 1;
			}
		}
		else if(Input.GetAxis("Vertical") < -0.02 && !Input.GetKey("left ctrl")) {
			GetComponent.<Animation>()["Walking"].speed = -1;
			GetComponent.<Animation>().CrossFade("Walking");
		}
		else {
			if(Input.GetButton("Action") && canAnimate) {
				DoAction();
			}
			else {
				IdleAnimation();
				boostIncr = 1;
			}
		}
		
		if(!Input.GetButton("Action")) {
			moveDirection = Vector3(0,0, Input.GetAxis("Vertical"));
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= boostIncr * speed;
		}
		
		if(Input.GetButtonDown("Jump")) {
			moveDirection.y = jumpSpeed;
			GetComponent.<Animation>()["Jumping"].speed = 2;
			GetComponent.<Animation>().CrossFade("Jumping");
		}
	}
	
	if(Input.GetButtonDown("Action") && canAnimate) {
		DoAction();
	}
	
	transform.eulerAngles.y += Input.GetAxis("Horizontal") * 5; // Use keyboard to control character turning
	rotateY = (Input.GetAxis("Mouse X") * 300) * Time.deltaTime; // Use mouse horizontal position to control character turning
	policeController.transform.Rotate(0, rotateY, 0);
	moveDirection.y -= gravity * Time.deltaTime;
	policeController.Move(moveDirection * Time.deltaTime);
}

function IdleAnimation() {
	GetComponent.<Animation>().CrossFade("Standby");
}

function DoAction() {
	GetComponent.<Animation>().CrossFade(actions[indexAction]);
	canAnimate = false;
}