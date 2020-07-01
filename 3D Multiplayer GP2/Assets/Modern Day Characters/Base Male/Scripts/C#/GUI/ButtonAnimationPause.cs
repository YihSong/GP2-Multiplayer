using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonAnimationPause : MonoBehaviour {
	public Animation sampleAnimation;
	public float animationSpeed = 1.0f;
	public float animationSpeedTarget = 1.0f;
	public float pauseSpeed = 10.0f;

	void Update() {
		if(Input.GetMouseButtonDown(0) && GetComponent<GUITexture>().HitTest(Input.mousePosition)) {
			if(animationSpeedTarget > 0.9f) {
				animationSpeedTarget = 0.0f;
			} else {
				if(animationSpeedTarget < 0.1f) {
					animationSpeedTarget = 1.0f;
				}
			}
		}

		animationSpeed = Mathf.Lerp(animationSpeed, animationSpeedTarget, Time.deltaTime * pauseSpeed);

		foreach(AnimationState state in sampleAnimation) {
			state.speed = animationSpeed;
		}
	}
}