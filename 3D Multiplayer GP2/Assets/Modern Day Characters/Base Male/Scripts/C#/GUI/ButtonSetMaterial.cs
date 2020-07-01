using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonSetMaterial : MonoBehaviour {
	public Material[] pickMaterials;
	public int currentMaterialID = 0;
	public SkinnedMeshRenderer chooseMeshRenderer;

	void Update() {
		if(Input.GetMouseButtonDown(0)) {
			if(GetComponent<GUITexture>().HitTest(Input.mousePosition)) {
				currentMaterialID++;

				if(currentMaterialID >= pickMaterials.Length) {
					currentMaterialID = 0;
				}

				chooseMeshRenderer.material = pickMaterials[currentMaterialID];
			}
		}
	}
}