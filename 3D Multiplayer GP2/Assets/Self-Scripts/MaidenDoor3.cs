using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MaidenDoor3 : MonoBehaviour
{
    public bool maidenDoor3Open;


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
            maidenDoor3Open = true;
            Debug.Log("Checkpoint Door 3 Maiden Opened");
            GetComponent<Animator>().SetBool("MaidenDoor3Open", maidenDoor3Open);
        }
    }
}
