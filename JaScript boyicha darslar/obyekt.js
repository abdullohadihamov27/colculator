function misollar(){
    const royhat = [
        {"ismi":"Oyatillo", "yoshi":"16"},
         {ismi:"Ali", yoshi:"15"},
         {ismi:"bobur", yoshi:"15"},
         {ismi:"sarvar", yoshi:"16"},
         {ismi:"umidjon", yoshi:"15"},
         {ismi:"abdulloh", yoshi:"15"},
         {ismi:"muhammadziyo", yoshi:"16"},
         {ismi:"kamoldin", yoshi:"16"},
         {ismi:"muhammadyusuf", yoshi:"15"},
         {ismi:"shohjahon", yoshi:"15"}
    
    ]
    let yigindi=0
    for(let i=0; i < royhat.length; i++){
        yigindi +=royhat[i].yoshi
        console.log(`Ismi ${royhat[i].ismi}, yoshi ${royhat[i].yoshi}`);
    }
console.log("ortacha yoshi: ", yigindi/royhat.length);
}
misollar()

function moshina(){
    const moshinalarroyhat = [
        {"Nomi":"Nexia", "narxi":"1000", "Ranggi": "blue" },
         {Nomi:"Malibu", narxi:"15000", "Ranggi": "white" },
         {Nomi:"BMW", narxi:"25000", "Ranggi": "black" },
         {Nomi:"Mersades", narxi:"28000", "Ranggi": "red" },
         {Nomi:"Cobalt", narxi:"16000", "Ranggi": "green" },
         {Nomi:"Captiva", narxi:"20000", "Ranggi": "black" },
    
    ]
    
    for(let i=0; i < moshinalarroyhat.length; i++){
        console.log(`Nomi ${moshinalarroyhat[i].Nomi}, narxi ${moshinalarroyhat[i].narxi}`);
    }
}
// moshina()
