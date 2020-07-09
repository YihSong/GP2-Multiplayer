#pragma strict

var player1 : Transform;
var player2 : Transform;

function Update() {
	transform.position = (player1.position + player2.position) * 0.5;
}