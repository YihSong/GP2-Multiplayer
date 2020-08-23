using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MaidenDoor1 : MonoBehaviour
{
    public bool maidenDoor1Open;


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
        if (other.tag == "Player")
        {
            maidenDoor1Open = true;
            Debug.Log("Checkpoint Door 1 Maiden Opened");
            GetComponent<Animator>().SetBool("MaidenDoor1Open", maidenDoor1Open);
        }
    }
}
