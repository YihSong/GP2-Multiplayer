using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;


public class PauseManager : MonoBehaviour
{
    public GameObject pauseScreen;
    public AudioSource music;




    // Start is called before the first frame update
    void Start()
    {
        Time.timeScale = 1;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButtonDown("Pause"))
        {
            pauseScreen.SetActive(true);
            music.Pause();
            Time.timeScale = 0;


        }






    }
    public void ResumeGame()
    {
        pauseScreen.SetActive(false);
        music.UnPause();
        Time.timeScale = 1;
    }
    public void BackToMenu()
    {
        SceneManager.LoadScene("Title");
    }



}
