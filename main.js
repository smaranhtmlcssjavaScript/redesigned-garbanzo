function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HTXqeLieN/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById("beluga");
        img2 = document.getElementById("doggo");
        img3 = document.getElementById("cow");
        img4 = document.getElementById("tiger");

        if (results[0].label == "meowing") {
            img1.src = "beluga.gif";
            img2.src = "doggo.png";
            img3.src = "cow.png";
            img4.src = "tiger.png";
        }
        else if (results[0].label == "barking") {
            img1.src = "beluga.png";
            img2.src = "doggo.gif";
            img3.src = "cow.png";
            img4.src = "tiger.png";
        }
        else if (results[0].label == "mooing") {
            img1.src = "beluga.png";
            img2.src = "doggo.png";
            img3.src = "cow.gif";
            img4.src = "tiger.png";
        }
        else if (results[0].label == "roaring") {
            img1.src = "beluga.png";
            img2.src = "doggo.png";
            img3.src = "cow.png";
            img4.src = "tiger.gif";
        }
        else {
            img1.src = "beluga.png";
            img2.src = "doggo.png";
            img3.src = "cow.png";
            img4.src = "tiger.png";
        }
    }
}