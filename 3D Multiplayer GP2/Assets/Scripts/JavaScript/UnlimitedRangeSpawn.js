#pragma strict

@script ExecuteInEditMode()

public var enemyPrefab : GameObject;
private var currentEnemy : GameObject;
private var respawnTimer : float;
public var delayTime : float = 2.0;
public var spawnRange : float = 50.0;
private var target : Transform;
private var distance : Vector3;

function Start() {
	respawnTimer = 0.0;
	delayTime = 10.0;
	spawnRange = 10.0;
	target = GameObject.FindWithTag("Player").transform;
}

function Update () {
	distance  = transform.position - target.position;
	respawnTimer += Time.deltaTime;
	
	if(distance.magnitude < spawnRange) { // Check if player is within spawn range
		if(respawnTimer > delayTime) {
			currentEnemy = Instantiate(enemyPrefab, transform.position, transform.rotation);
			respawnTimer = 0.0;
		}
	}
}

function OnGUI() {
	GUI.Box(Rect(20, 20, 50, 20), distance.magnitude.ToString("f2"));
}