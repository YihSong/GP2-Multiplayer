using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovingPlatform : MonoBehaviour
{
    public Transform targetA;
    public Transform targetB;
    private Transform currentTarget;
    private float proximity = 0.0001f;
    private float speed = 5.0f;

    public bool playerInMovingPlatform;

    void Start()
    {
        currentTarget = targetA;
    }

    void Update()
    {
        Vector3 distance = transform.position - currentTarget.transform.position;
        //	print(TranslateTriggerSwitch1.moveStatus1);

        // Change current target to next one when distance is less than or equal to defined proximity
        if (distance.magnitude <= proximity && playerInMovingPlatform == true)
        {
            currentTarget = targetB;
        }

        if (distance.magnitude <= proximity && playerInMovingPlatform == false)
        {
            currentTarget = targetA;
        }

        transform.position = Vector3.MoveTowards(transform.position, currentTarget.transform.position, Time.deltaTime * speed); // Object move towards current target
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Player")
        {
            playerInMovingPlatform = true;
            Debug.Log("Lift 1 Rises");
        }
    }
    private void OnTriggerExit(Collider other)
    {
        if (other.tag == "Player")
        {
            playerInMovingPlatform = false;
            Debug.Log("Lift 1 Falls");
        }
    }
}
