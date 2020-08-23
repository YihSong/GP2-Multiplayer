using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VillagerDoor1 : MonoBehaviour
{
    public bool villagerDoor1Open;


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
            villagerDoor1Open = true;
            Debug.Log("Checkpoint Door 1 Villager Opened");
            GetComponent<Animator>().SetBool("VillagerDoor1Open", villagerDoor1Open);
        }
    }
}
