Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
camera = document.getElementById("camera")
Webcam.attach("#camera")

function photo()
{
    Webcam.snap(function(data_url)
    {
        document.getElementById("result").innerHTML = "<img src="+data_url+" id='image'>"
    })
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HyjIyzNQx/model.json',modelLoaded);
function modelLoaded()
{
    console.log("Model loaded successfully!")
}
function check()
{
    img = document.getElementById("image")
    classifier.classify(img,gotResult)
}
function gotResult(error,result)
{
    if(error)
    {
        console.error("An error occurred here are the details:" + error)
    }
    else
    {
        console.log(result)
        document.getElementById("object").innerHTML = result[0].label
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3)
        percent = document.getElementById("accuracy").innerHTML * 255
        percent2 = percent - 255
        document.getElementById("object").style.color = "rgb("+percent2+", "+percent+", 0)";
        document.getElementById("accuracy").style.color = "rgb(0, "+percent+", 0)";
        console.log(percent)
    }
}