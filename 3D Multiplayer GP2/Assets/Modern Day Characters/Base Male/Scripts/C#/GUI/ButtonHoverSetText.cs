using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(GUITexture))]

public class ButtonHoverSetText : MonoBehaviour {
	public GUIText chooseText;
	public string textValue;
	public float offset = 30;
	private Vector2 pixelOffset;

	void Update() {
		if(GetComponent<GUITexture>().HitTest(Input.mousePosition)) {
			chooseText.text = textValue;
			pixelOffset = chooseText.pixelOffset;
			pixelOffset.x = Input.mousePosition.x + offset;
			pixelOffset.y = Input.mousePosition.y;
			chooseText.pixelOffset = pixelOffset;
		}
	}
}