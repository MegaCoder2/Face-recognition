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