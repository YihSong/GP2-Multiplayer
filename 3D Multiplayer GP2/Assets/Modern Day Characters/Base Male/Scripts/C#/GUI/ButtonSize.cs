using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(ButtonPosition))]

public class ButtonSize : MonoBehaviour {
	private ButtonPosition buttonPositionScript;
	public float buttonSize = 1.0f;
	
	void Start() {
		buttonPositionScript = GetComponent<ButtonPosition>();
	}

	void Update() {
		buttonPositionScript.buttonSize = buttonSize;
	}
}