using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class WinPlatform : MonoBehaviour
{
    public bool player1In;
    public bool player2In;



    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (player1In == true && player2In == true)
        {
            SceneManager.LoadScene("Win");
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Player")
        {
            player1In = true;
        }
        if (other.tag == "Player2")
        {
            player2In = true;
        }
    }
    private void OnTriggerExit(Collider other)
    {
        if (other.tag == "Player")
        {
            player1In = false;
        }
        if (other.tag == "Player2")
        {
            player2In = false;
        }
    }
}
