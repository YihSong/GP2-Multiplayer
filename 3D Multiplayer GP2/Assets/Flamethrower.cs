using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Flamethrower : MonoBehaviour
{
    public GameObject flameThrower;

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine("FlamethrowerCo");
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Player")
        {
            Debug.Log("You die from flames");
        }
    }

    public IEnumerator FlamethrowerCo()
    {
        yield return new WaitForSeconds(5);
        Destroy(Instantiate(flameThrower, transform.position, transform.rotation), 3);
        StartCoroutine("FlamethrowerCo");



    }
}
