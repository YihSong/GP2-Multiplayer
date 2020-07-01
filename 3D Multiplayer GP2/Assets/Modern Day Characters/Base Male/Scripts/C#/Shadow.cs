using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shadow : MonoBehaviour {
	public string[] ignoreRootName;
	public float distanceTolerance = 0.4f;
	public float maxOpacity = 1.0f;
	private float multiplier = 1.2f;
	private float opacity = 1.0f;
	private Transform castingPoint;
	private float buffer = 0.02f;
	private Vector3 location;
	private Vector4 alpha;

	void Start() {
		GetComponent<Renderer>().enabled = true;
		castingPoint = transform.Find("castingPoint");
		castingPoint.parent = transform.parent;
		transform.parent = transform.root;
	}

	void LateUpdate() {
		// Shadow position
		transform.position = castingPoint.position;
		RaycastHit[] hits;
		hits = Physics.RaycastAll(transform.position + Vector3.up * 0.5f, -Vector3.up);
		float maxShadowYPosition = -999999;

		for(int i = 0; i < hits.Length; i++) {
			RaycastHit hit = hits[i];
			string name = hit.transform.root.name;
			bool takeIt = true;

			for(int n = 0; n < ignoreRootName.Length; n++) {
				string ignoreName = ignoreRootName[n];

				if(name == ignoreName) {
					takeIt = false;
				}
			}

			if(takeIt) {
				if(hit.point.y + buffer > maxShadowYPosition) {
					maxShadowYPosition = hit.point.y + buffer;
					location = transform.position;
					location.y = hit.point.y + buffer;
					transform.position = location;
					transform.LookAt(transform.position + hit.normal);
				}
			}
		}

		// Opacity distance
		float distanceShadow = Vector3.Distance(transform.position, castingPoint.position);
		opacity = Mathf.Lerp(maxOpacity, 0.0f, distanceShadow * (1 / distanceTolerance));

		if(hits.Length == 0) {
			opacity = 0.0f;
		}

		opacity *= multiplier;
		alpha = GetComponent<Renderer>().material.color;
		alpha.w = opacity;
		GetComponent<Renderer>().material.color = alpha;
		//renderer.material.GetColor("_Color").a = opacity;
	}
}