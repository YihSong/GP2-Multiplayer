#pragma strict

public var pickMaterials : Material[];
public var currentMaterialID : int = 0;
public var chooseMeshRenderer : SkinnedMeshRenderer;

function Update() {
	if(Input.GetMouseButtonDown(0)) {
		if(GetComponent.<GUITexture>().HitTest(Input.mousePosition)) {
			currentMaterialID ++;

			if(currentMaterialID >= pickMaterials.Length) {
				currentMaterialID = 0;
			}

			chooseMeshRenderer.material = pickMaterials[currentMaterialID];
		}
	}
}