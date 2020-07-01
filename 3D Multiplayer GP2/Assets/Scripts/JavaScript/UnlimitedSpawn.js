#pragma strict

var enemyPrefab : GameObject;
private var currentEnemy : GameObject;
private var respawnTimer : float;
private var delayTime : float = 5.0;

function Start() {
	respawnTimer = 0.0;
	currentEnemy = Instantiate(enemyPrefab, transform.position, transform.rotation);
}

function Update () {
	respawnTimer += Time.deltaTime;
	if(respawnTimer > delayTime) {
		currentEnemy = Instantiate(enemyPrefab, transform.position, transform.rotation);
		respawnTimer = 0.0;
	}
}