using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MaidenDoor2 : MonoBehaviour
{
    public bool maidenDoor2Open;


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
            maidenDoor2Open = true;
            Debug.Log("Checkpoint Door 2 Maiden Opened");
            GetComponent<Animator>().SetBool("MaidenDoor2Open", maidenDoor2Open);
        }
    }
}
