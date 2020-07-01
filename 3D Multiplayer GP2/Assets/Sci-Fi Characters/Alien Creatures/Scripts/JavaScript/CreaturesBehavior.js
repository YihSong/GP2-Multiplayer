public var speed : float = 8000;
//public var root : GameObject;
private var randNum : int;
private var timer : float;
var myRoot : GameObject;
var myBodyZone : GameObject;
var myDangerZone : GameObject;
var health : float = 3;
var damage : float = 1;
//public var bloodParticle : ParticleSystem;
private var state : int = 1; // 1 for run, 2 for fight, 3 for dead

function Start() {
	Destroy(myRoot, 40);
}

function FixedUpdate() {
	if(health < 0)
		state=3;

	if(state == 3) { // Died
		timer += Time.deltaTime;
		myRoot.GetComponent.<Collider>().enabled = false;
		Destroy(myRoot.GetComponent.<Rigidbody>());

		//bloodParticle.emissionRate=0;	
	
		if(!myRoot.GetComponent.<Animation>().IsPlaying("die1") && !myRoot.GetComponent.<Animation>().IsPlaying("die2")) {
			randNum = Random.Range(1, 3);

			if(randNum == 1)
				myRoot.GetComponent.<Animation>().CrossFade("die1");
			if(randNum == 2)
				myRoot.GetComponent.<Animation>().CrossFade("die2");
		}

		if(timer > 2)
			myRoot.transform.Translate(0, -0.2 * Time.deltaTime, 0);
	
		if(timer > 10)
			Destroy(myRoot);
	}

	if(state == 1) { // Running
		//bloodParticle.emissionRate=0;
		myRoot.GetComponent.<Rigidbody>().AddRelativeForce (0, 0 ,speed*Time.deltaTime*(7-myRoot.GetComponent.<Rigidbody>().velocity.magnitude));
		myRoot.GetComponent.<Rigidbody>().drag=0.5;

		if(!myRoot.GetComponent.<Animation>().IsPlaying("run")) {
			myRoot.GetComponent.<Animation>().CrossFade("run");
		}
	}

	if(state == 2) { // Attacking
		//bloodParticle.emissionRate = 5;
		state = 1;
	
		if(!myRoot.GetComponent.<Animation>().IsPlaying("attack1")&&!myRoot.GetComponent.<Animation>().IsPlaying("attack2")) {
			randNum = Random.Range(1, 3);

			if(randNum == 1)
				myRoot.GetComponent.<Animation>().CrossFade("attack1");

			if(randNum == 2)
				myRoot.GetComponent.<Animation>().CrossFade("attack2");
		}
	}
}

function OnTriggerStay(other : Collider) {
	if(other.tag == "bodyZone" && state != 3) {
		other.transform.Find("controller").GetComponent(CreaturesBehavior).health -= damage * Time.deltaTime;
		myRoot.GetComponent.<Rigidbody>().drag = 10;
		
		state=2;
	}
}