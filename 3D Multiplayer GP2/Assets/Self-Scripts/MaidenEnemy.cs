using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MaidenEnemy : MonoBehaviour
{
    public Transform targetA; // Defines target to move to.
    public Transform targetB;


    private Transform currentTarget;

    private float proximity = 0.0001f; // Difference in distance before moving to next target.
    private float speed = 0.8f; // Speed to move to target.

    public MaidenLogic maiden;
    public Vector3 position;

    // Set starting current target
    void Start()
    {
        currentTarget = targetA;
        position = transform.position;

        maiden = FindObjectOfType<MaidenLogic>();
    }

    void Update()
    {
        Vector3 distance = transform.position - currentTarget.transform.position;

        // Change current target to next one when distance is less than or equal to defined proximity
        if (distance.magnitude <= proximity)
        {
            switch (currentTarget.name)
            { // Switch expression only accepts boolean, integer, float or string
                case "Target A":
                    currentTarget = targetB; // After moving to targetA, the next target movement would be targetB.
                    break;
                case "Target B":
                    currentTarget = targetA; // After moving to targetB, the next target movement would be targetA.
                    break;


            }
        }
        if (maiden.dead == true)
        {


            if (PlayerPrefs.GetInt("MaidenCheckpointInt") == 0)
            {
                transform.position = position;
            }

            if (PlayerPrefs.GetInt("MaidenCheckpointInt") == 1)
            {
                transform.position = new Vector3(-49, -2.5f, -15);
            }
            if (PlayerPrefs.GetInt("MaidenCheckpointInt") == 2)
            {
                transform.position = new Vector3(-62.5f, 14, -26);
            }
            if (PlayerPrefs.GetInt("MaidenCheckpointInt") == 3)
            {
                transform.position = new Vector3(-81, 27, -10);

            }
        }

        transform.position = Vector3.MoveTowards(transform.position, currentTarget.transform.position, Time.deltaTime * speed); // Object move towards current target
                                                                                                                                transform.LookAt(currentTarget); // Local axis z will point to next current target
    }
    private void OnTriggerEnter(Collider other)
    {
        GetComponent<Animation>()["punch"].speed = 1;
        GetComponent<Animation>().CrossFade("punch");
        StartCoroutine("GrabMaidenCo");
    }

    public IEnumerator GrabMaidenCo()
    {
        yield return new WaitForSeconds(1);
        Debug.Log("The maiden dies from the Monster.");
        maiden.dead = true;
        speed = 0;
        yield return new WaitForSeconds(1);
        maiden.dead = false;
        speed = 1.75f;
    }
}
