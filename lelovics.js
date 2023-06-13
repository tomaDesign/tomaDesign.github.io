function velemenyKuldes(){
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "name": "string",
    "email": "string",
    "phone": "string",
    "message": "string"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
        if(name!="" && email!="" && phone!="" && message!="")
    {
        fetch("/api/kapcsolat", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); 
        if(response.status == 200)
    {
        alert("Munkatársunk hamarosan keresni fogja önt!");
        document.getElementById('name').value = "";
        document.getElementById('email').value ="";
        document.getElementById('phone').value="";
        document.getElementById('message').value="";
    }
    }
    else {
        alert("Kérjük, minden mezőt töltsön ki az űrlapon");
    }
}



function szamlal(){
    var szam=int.Parse(document.getElementById("szamlalo").value);
    szam = szam+1;
    document.getElementById("szamlalo").innerHTML= szam;
    setInterval(szamlal, 500);
}

window.onload = szamlal();