private var agent : UnityEngine.AI.NavMeshAgent;
private var player : Vector3;
private var manager : GameObject;

function Start() {
	agent = GetComponent(UnityEngine.AI.NavMeshAgent);
	manager = gameObject.Find("Game Control Center");
}

function Update() {
	player = FindClosestPlayer().transform.position;
	agent.destination = player;
}

function FindClosestPlayer() : GameObject {
	// Find all game objects tagged as Player
	var targets : GameObject[];
	targets = GameObject.FindGameObjectsWithTag("Player");
	var closestPlayer : GameObject;
	var distance = Mathf.Infinity;
	var position = transform.position;
	
	// Iterate through them and find the closest one
	for (var target : GameObject in targets)  {
		var difference = (target.transform.position - position);
		var curDistance = difference.sqrMagnitude;
		if (curDistance < distance) {
			closestPlayer = target;
			distance = curDistance;
		}
	}
	return closestPlayer;
}