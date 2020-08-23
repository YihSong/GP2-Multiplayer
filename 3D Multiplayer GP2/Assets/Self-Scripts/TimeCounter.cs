using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class TimeCounter : MonoBehaviour
{
    private float startTime = 300; // Time given to complete game
    private float timeRemaining;
    public Text countDownTimeText;


    void Start()
    {
        //GetComponent<GUIText>().material.color = Color.white; // GUI text color
    }

    void Update()
    {
        CountDown();
    }

    void CountDown()
    {
        timeRemaining = startTime - Time.timeSinceLevelLoad;
        ShowTime();

        if (timeRemaining < 0)
        {
            timeRemaining = 0;
            TimeIsUp();
        }
    }

    void ShowTime()
    {
        int minutes;
        int seconds;
        string timeString;

        minutes = (int)timeRemaining / 60; // Derive minutes by dividing seconds by 60 seconds
        seconds = (int)timeRemaining % 60; // Derive remainder after dividing by 60 seconds
        timeString = "TIME LEFT : " + minutes.ToString() + ":" + seconds.ToString("d2");
        // GetComponent<GUIText>().text = timeString;
        countDownTimeText.text = "TIME LEFT : " + minutes.ToString() + ":" + seconds.ToString("d2");
    }

    void TimeIsUp()
    {
        SceneManager.LoadScene("Lose");
    }
}
