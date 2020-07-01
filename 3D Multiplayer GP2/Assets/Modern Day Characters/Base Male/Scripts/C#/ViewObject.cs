using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ViewObject : MonoBehaviour {
	public GameObject guiObject;
	private Vector2 rotationVelocity;
	private Vector3 location;

	void Update() {
		bool clickingButton = false;

		if(guiObject != null) {
			GUITexture[] buttonList = guiObject.GetComponentsInChildren<GUITexture>();

			for(int i = 0; i < buttonList.Length; i++) {
				if(buttonList[i].HitTest(Input.mousePosition)) {
					clickingButton = true;
				}
			}
		}

		if(!clickingButton && (Input.GetMouseButton(0) || Input.GetMouseButton(1))) {
			rotationVelocity.x += Mathf.Pow(Mathf.Abs(Input.GetAxis("Mouse X")), 1.5f) * Mathf.Sign(Input.GetAxis("Mouse X"));
			rotationVelocity.y -= Input.GetAxis("Mouse Y") * 0.04f;
		}

		location = transform.position;
		location.y += rotationVelocity.y;
		transform.RotateAround(Vector3.zero, Vector3.up, rotationVelocity.x);
		rotationVelocity = Vector2.Lerp(rotationVelocity, Vector2.zero, Time.deltaTime * 10.0f);
		location.y = Mathf.Clamp(transform.position.y, 0, 5);
		transform.position = location;
		transform.LookAt(new Vector3(0, 1, 0));
	}
}