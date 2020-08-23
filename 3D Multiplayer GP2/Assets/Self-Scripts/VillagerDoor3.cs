using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VillagerDoor3 : MonoBehaviour
{
    public bool villagerDoor3Open;


    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Player2")
        {
            villagerDoor3Open = true;
            Debug.Log("Checkpoint Door 3 Villager Opened");
            GetComponent<Animator>().SetBool("VillagerDoor3Open", villagerDoor3Open);
        }
    }
}
