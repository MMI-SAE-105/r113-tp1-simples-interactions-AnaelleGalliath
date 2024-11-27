// TODO
aMettreEnRouge = document.querySelectorAll("#a-mettre-en-rouge")
aMettreEnRouge.style.color = "red";


enRougeSuiteAClick = document.getElementById("en-rouge-suite-a-click")

enRougeSuiteAClick.addeventListener("click", (evt)=>{
    enRougeSuiteAClick.style.color = "red"
    });


collH2 = document.querySelector("h2")

collH2.forEach ((elm)=>{
    elm.addeventListener("click".at(evt)=>{
        evt.target.style.color = "red";
    })
})


// J'ai tout réecris ici car je n'étais pas sur que ca marche dans la console