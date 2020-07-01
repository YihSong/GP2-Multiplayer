using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(GUIText))]

public class InfoText : MonoBehaviour {
	private float lastClickTime;
	public float acknowledgeDuration = 0.3f;
	public float provideHelpTime = 3.0f;
	public string helpText;

	void Update() {
		if(Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1)) {
			lastClickTime = Time.time;
		}

		if(Input.GetMouseButton(0) || Input.GetMouseButton(1)) {
			if(Time.time > lastClickTime + acknowledgeDuration) {
				GetComponent<GUIText>().text = "";
				Destroy(this.gameObject);
			}
		}

		if(Time.time > provideHelpTime) {
			GetComponent<GUIText>().text = helpText;
		} else {
			GetComponent<GUIText>().text = "";
		}
	}
}