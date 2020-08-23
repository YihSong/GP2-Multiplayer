using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Fire : MonoBehaviour
{
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
            Debug.Log("Villager died from flames.");
       }
        if (other.tag == "Player2")
        {
            Debug.Log("Maiden died from flames.");
        }

    }
}
