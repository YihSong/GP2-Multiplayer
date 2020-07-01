using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(GUITexture))]

public class ButtonSwitchTexture : MonoBehaviour {
	Texture[] textureList = null;
	int currentTextureID = 0;
	
	void Update() {
		if(Input.GetMouseButtonDown(0) && GetComponent<GUITexture>().HitTest(Input.mousePosition)) {
			currentTextureID++;

			if(currentTextureID >= textureList.Length) {
				currentTextureID = 0;
			}

			GetComponent<GUITexture>().texture = textureList[currentTextureID];
		}
	}
}