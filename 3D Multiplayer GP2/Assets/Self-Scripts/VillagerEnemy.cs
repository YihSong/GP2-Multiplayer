using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VillagerEnemy : MonoBehaviour
{
    public Transform targetA; // Defines target to move to.
    public Transform targetB;


    private Transform currentTarget;

    private float proximity = 0.0001f; // Difference in distance before moving to next target.
    private float speed = 1.75f; // Speed to move to target.

    // Set starting current target
    void Start()
    {
        currentTarget = targetA;
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

        transform.position = Vector3.MoveTowards(transform.position, currentTarget.transform.position, Time.deltaTime * speed); // Object move towards current target
                                                                                                                                //transform.LookAt(currentTarget); // Local axis z will point to next current target
    }
    private void OnTriggerEnter(Collider other)
    {
        GrabVillager();
        Debug.Log("The villager dies from the Monster.");
    }

    public void GrabVillager()
    {
        GetComponent<Animation>()["punch"].speed = 1;
        GetComponent<Animation>().CrossFade("punch");
    }
}
