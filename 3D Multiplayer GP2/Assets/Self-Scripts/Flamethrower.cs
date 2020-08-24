using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Flamethrower : MonoBehaviour
{
    public GameObject flameThrower;
    public int waitToFire;
    public int waitToStop;

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
        flameThrower.SetActive(false);
        yield return new WaitForSeconds(waitToFire);
        flameThrower.SetActive(true);
        Destroy(Instantiate(flameThrower, flameThrower.transform.position, flameThrower.transform.rotation), waitToStop);
        StartCoroutine("FlamethrowerCo");



    }
}
