#pragma strict

@script RequireComponent(GUITexture);

public var chooseText : GUIText;
public var textValue : String;
public var fontType : Font;
public var offset : float = 30;

function Update() {
	if(GetComponent.<GUITexture>().HitTest(Input.mousePosition)) {
		chooseText.text = textValue;
		chooseText.font = fontType;
		chooseText.pixelOffset.x = Input.mousePosition.x + offset;
		chooseText.pixelOffset.y = Input.mousePosition.y;
	}
}