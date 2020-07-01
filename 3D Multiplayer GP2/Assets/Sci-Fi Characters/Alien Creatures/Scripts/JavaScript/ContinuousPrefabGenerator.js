public var createThis : GameObject[]; // List of possible prefabs
public var thisManyTimesPerSec : float = 1;
public var xWidth : float; // Area where prefabs will be generated
public var yWidth : float;
public var zWidth : float;
public var xRotMax : float; // Maximum rotation of each prefab
public var yRotMax : float=180;
public var zRotMax : float;
private var randNum : float;
private var x_cur : float; // Random placement process
private var y_cur : float;
private var z_cur : float;
private var xRotCur : float; // For random rotation process
private var yRotCur : float;
private var zRotCur : float;
private var timeCounter : float;
private var effectCounter : int;
private var trigger : float; // Trigger at interwals to generate a prefab

function Start() {
	if(thisManyTimesPerSec < 0.1)
		thisManyTimesPerSec = 0.1; // Avoid division with zero and negative numbers

	trigger = 1 / thisManyTimesPerSec; // Define the intervals of time of the prefab generation
}

function Update() {
	timeCounter += Time.deltaTime;

	if(timeCounter > trigger) {
		randNum = Mathf.Floor(Random.value * createThis.length); // Randomize prefab to create

		// Random location
		x_cur = transform.localPosition.x + (Random.value * xWidth) - (xWidth * 0.5);
		y_cur = transform.localPosition.y + (Random.value * yWidth) - (yWidth * 0.5);
		z_cur = transform.localPosition.z + (Random.value * zWidth) - (zWidth * 0.5);

		// Random rotation
		xRotCur = transform.rotation.x + (Random.value * xRotMax * 2) - (xRotMax);
		yRotCur = transform.rotation.y + (Random.value * yRotMax * 2) - (yRotMax);
		zRotCur = transform.rotation.z + (Random.value * zRotMax * 2) - (zRotMax);

		var justCreated : GameObject = Instantiate(createThis[randNum], Vector3(x_cur, y_cur, z_cur), transform.rotation); // Create the prefab
		justCreated.transform.Rotate(xRotCur, yRotCur, zRotCur);
		
		timeCounter -= trigger;
	}
}