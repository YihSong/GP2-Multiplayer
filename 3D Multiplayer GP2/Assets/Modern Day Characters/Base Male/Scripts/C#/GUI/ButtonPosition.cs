using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(GUITexture))]

public class ButtonPosition : MonoBehaviour {
	public bool yPositionFromTop = true;
	public bool xPositionFromRight = false;
	public Vector2 buttonPosition;
	public float buttonSize = 1.0f;
	public Rect getGuiTexture;

	void Start() {
		getGuiTexture = GetComponent<GUITexture>().pixelInset;
		transform.position = Vector3.zero;
	}

	void Update() {
		if(xPositionFromRight) {
			getGuiTexture.x = Screen.width - buttonPosition.x - GetComponent<GUITexture>().texture.width * 0.5f * buttonSize;
		} else {
			getGuiTexture.x = buttonPosition.x - GetComponent<GUITexture>().texture.width * 0.5f * buttonSize;
		}

		if(yPositionFromTop) {
			getGuiTexture.y = Screen.height - buttonPosition.y - GetComponent<GUITexture>().texture.height * 0.5f * buttonSize;
		} else {
			getGuiTexture.y = buttonPosition.y - GetComponent<GUITexture>().texture.height * 0.5f * buttonSize;
		}

		getGuiTexture.width = GetComponent<GUITexture>().texture.width * buttonSize;
		getGuiTexture.height = GetComponent<GUITexture>().texture.height * buttonSize;
	}
}