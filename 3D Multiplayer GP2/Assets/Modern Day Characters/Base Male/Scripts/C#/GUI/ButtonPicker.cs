using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonPicker : MonoBehaviour {
	public ButtonPosition[] buttonList;
	public Vector2 startPosition;
	public float separation;
	public float minButtonSize = 0.99f;
	public float buttonSize = 200.0f;
	public float mouseInfluence = 0.7f;
	private Vector3 buttonPosition;

	void Update() {
		float dynamicSeparation = 0.0f;

		for(var i = 0; i < buttonList.Length; i++) {
			buttonList[i].buttonPosition.x = startPosition.x;
			buttonList[i].buttonPosition.y = startPosition.y + dynamicSeparation;

			buttonList[i].yPositionFromTop = true;
			buttonPosition.x = buttonList[i].getGuiTexture.x - buttonList[i].getGuiTexture.width * 0.5f;
			buttonPosition.y = buttonList[i].getGuiTexture.y + buttonList[i].getGuiTexture.height * 0.5f;
			float mouseDistance = Vector3.Distance(Input.mousePosition, buttonPosition);
			buttonSize = buttonSize / Mathf.Max(mouseDistance / mouseInfluence, buttonSize);
			buttonSize = Mathf.Max(buttonSize, minButtonSize);
			buttonList[i].buttonSize = buttonSize;
			dynamicSeparation += separation * buttonSize;
		}
	}
}
