using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VillagerDoor2 : MonoBehaviour
{
    public bool villagerDoor2Open;


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
            villagerDoor2Open = true;
            Debug.Log("Checkpoint Door 2 Villager Opened");
            GetComponent<Animator>().SetBool("VillagerDoor2Open", villagerDoor2Open);
        }
    }
}
