#pragma strict

@script RequireComponent(GUITexture);

public var animationChange : Animation;
public var animationName : String;
public var currentAnimation : String = "tPose";
public var matchNormalizedTime : boolean = true;

function Update() {
	if(Input.GetMouseButtonDown(0)) {
		if(GetComponent.<GUITexture>().HitTest(Input.mousePosition)) {
			animationChange.CrossFade(animationName);

			if(matchNormalizedTime) {
				animationChange[animationName].normalizedTime = animationChange[currentAnimation].normalizedTime;
			}

			transform.parent.BroadcastMessage("SetCurrentAnimation", animationName);
		}
	}
}

function SetCurrentAnimation(newAnimationName : String) {
	currentAnimation = newAnimationName;
}