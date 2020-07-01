using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(GUIText))]

public class ClearText : MonoBehaviour {
	void Update() {
		GetComponent<GUIText>().text = "";
	}
}