/* Attach this to a GUIText to make a frames/second indicator
It calculates frames/second over each updateInterval, so the display does not keep changing wildly
It is also fairly accurate at very low FPS counts (< 10)
We do this not by simply counting frames per interval, but by accumulatedFramesulating FPS for each frame
This way we end up with correct overall FPS even if the interval renders something like 5.5 frames
*/

var updateInterval = 0.5;
 
private var accumulatedFrames = 0.0; // Accumulated frames over the interval
private var frames = 0; // Frames drawn over the interval
private var timeleft : float; // Left time for current interval
 
function Start()
{
    if( !GetComponent.<GUIText>() )
    {
        print ("FPS script needs a GUIText component!");
        enabled = false;
        return;
    }
    timeleft = updateInterval;  
}
 
function Update()
{
    timeleft -= Time.deltaTime;
    accumulatedFrames += Time.timeScale / Time.deltaTime;
    ++frames;
    
    // Interval ended - update GUI text and start new interval
    if( timeleft <= 0.0 )
    {
        // Display two fractional digits (f2 format)
        GetComponent.<GUIText>().text = "" + (accumulatedFrames / frames).ToString("f2");
        timeleft = updateInterval;
        accumulatedFrames = 0.0;
        frames = 0;
    }
}