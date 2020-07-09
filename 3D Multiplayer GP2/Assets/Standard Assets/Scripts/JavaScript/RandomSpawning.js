#pragma strict

var spawnPrefab : GameObject;

function Start () {
	Instantiate(spawnPrefab, Vector3(Random.Range(-8, 8), 0, 8), transform.rotation);
}