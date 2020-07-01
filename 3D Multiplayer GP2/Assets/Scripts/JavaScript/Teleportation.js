#pragma strict

var eastPortal : Transform;
var westPortal : Transform;

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if(hit.gameObject.name == "West Portal")
		GetComponent.<Collider>().transform.position = eastPortal.transform.position;
	if(hit.gameObject.name == "East Portal")
		GetComponent.<Collider>().transform.position = westPortal.transform.position;
}