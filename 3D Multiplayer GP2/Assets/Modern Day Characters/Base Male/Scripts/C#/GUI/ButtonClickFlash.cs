using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(ButtonPosition))]
[RequireComponent(typeof(GUITexture))]

public class ButtonClickFlash : MonoBehaviour {
private float flashStartTime;
private AnimationCurve changeCurve;

void Start() {
		changeCurve = new AnimationCurve(new Keyframe(0.0f, 0.0f), new Keyframe(0.1f, 0.3f), new Keyframe(0.3f, -0.1f), new Keyframe(0.6f, 0.0f));
	}

	void Update() {
		if(Input.GetMouseButtonDown(0)) {
			if(GetComponent<GUITexture>().HitTest(Input.mousePosition)) {
				flashStartTime = Time.time;
			}
		}

		ButtonPosition buttonPositionScript = GetComponent<ButtonPosition>();
		float sizeChange;

		if(Time.time > flashStartTime && Time.time < flashStartTime + changeCurve.length) {
			float elapsedTime = Time.time - flashStartTime;

			// Size
			sizeChange = changeCurve.Evaluate(elapsedTime);
			buttonPositionScript.buttonSize += sizeChange;

			// Color
			float colorChange = 0.5f + changeCurve.Evaluate(elapsedTime) * 0.3f;
			float colorChangeBlue = 0.5f + changeCurve.Evaluate(elapsedTime) * 0.5f;
			GetComponent<GUITexture>().color = new Color(colorChange, colorChange, colorChangeBlue);
		}
	}
}