using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VillagerEnemy : MonoBehaviour
{
    public Transform targetA; // Defines target to move to.
    public Transform targetB;


    private Transform currentTarget;

    private float proximity = 0.0001f; // Difference in distance before moving to next target.
    private float speed = 1; // Speed to move to target.

    public VillagerLogic villager;

    public Vector3 position;

    // Set starting current target
    void Start()
    {
        currentTarget = targetA;
        position = transform.position;
        villager = FindObjectOfType<VillagerLogic>();
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
                                                                                                                                transform.LookAt(currentTarget); // Local axis z will point to next current target
        if (villager.dead == true)
        {
            if (PlayerPrefs.GetInt("VillagerCheckpointInt") == 0)
            {
                transform.position = position;
            }

            if (PlayerPrefs.GetInt("VillagerCheckpointInt") == 1)
            {
                transform.position = new Vector3(-28, 0, 17.25f);
            }
            if (PlayerPrefs.GetInt("VillagerCheckpointInt") == 2)
            {
                transform.position = new Vector3(-114, 17, 5.25f);
            }
            if (PlayerPrefs.GetInt("VillagerCheckpointInt") == 3)
            {
                transform.position = new Vector3(-76, 27, 39);

            }
        }

    }
    private void OnTriggerEnter(Collider other)
    {
        GetComponent<Animation>()["punch"].speed = 1;
        GetComponent<Animation>().CrossFade("punch");
        StartCoroutine("GrabVillagerCo");
    }

    public IEnumerator GrabVillagerCo()
    {
        yield return new WaitForSeconds(1);
        Debug.Log("The villager dies from the Monster.");
        villager.dead = true;
        speed = 0;
        yield return new WaitForSeconds(1);
        villager.dead = false;
        speed = 1.75f;
    }
}
