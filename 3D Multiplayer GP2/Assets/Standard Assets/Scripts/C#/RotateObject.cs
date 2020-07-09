using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateObject : MonoBehaviour {
	public float rotationSpeed = 2.5f;
	
	void Update() {
		transform.Rotate(0, rotationSpeed, 0);
	}
}