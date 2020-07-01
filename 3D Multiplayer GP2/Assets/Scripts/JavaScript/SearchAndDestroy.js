#pragma strict

private var agent : UnityEngine.AI.NavMeshAgent;
private var target : Vector3;

function Start() {
	agent = GetComponent(UnityEngine.AI.NavMeshAgent);
}

function Update() {
	target = GameObject.FindWithTag("Player").transform.position;
	agent.destination = target;
}

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == "Player") {
		Destroy(this.gameObject);
	}
}