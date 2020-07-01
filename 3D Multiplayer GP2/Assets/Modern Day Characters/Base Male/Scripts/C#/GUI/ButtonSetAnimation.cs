using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(GUITexture))]

public class ButtonSetAnimation : MonoBehaviour {
	public Animation animationChange;
	public string animationName;
	public string currentAnimation = "tPose";
	public bool matchNormalizedTime = true;
	
	void Update() {
		if(Input.GetMouseButtonDown(0)) {
			if(GetComponent<GUITexture>().HitTest(Input.mousePosition)) {
				animationChange.CrossFade(animationName);

				if(matchNormalizedTime) {
					animationChange[animationName].normalizedTime = animationChange[currentAnimation].normalizedTime;
				}

				transform.parent.BroadcastMessage("SetCurrentAnimation", animationName);
			}
		}
	}

	void SetCurrentAnimation(string newAnimationName) {
		currentAnimation = newAnimationName;
	}
}