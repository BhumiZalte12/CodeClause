
var element = document.getElementById("togglep");
  var element2 = document.getElementById("toggleBTN")


function Handle(){
    console.log("click");
const fInput = document.getElementById('fInput');
    console.log(fInput.files);
    const image = fInput.files[0];

    // Multipart file
    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = "CnbjLASYDARPreTpJgDuRdo1";

    fetch('https://api.remove.bg/v1.0/removebg',{
        method:'POST',
        headers: {
        'X-Api-Key': apiKey
     },
     body: formData
    })
    .then(function(reponse){
            return reponse.blob()
    })
    .then(function(blob){
            console.log(blob);
            const url = URL.createObjectURL(blob);
            imageURL = url;
            const img = document.createElement('img');
            img.src = url;
            document.body.appendChild(img);
    })
    .catch();
}

function downloadFile(){
var a = document.createElement('a'); //<a></a>
    a.href = imageURL;
    a.download = 'download.png';
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
}