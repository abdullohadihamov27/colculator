function ismvaFamiliya(ism,familiya){
    console.log(`Ushbu balogatga yetgan bolani ismi ${ism}, Familiyasi ${familiya}`);
}


function text(text) {
    console.log((text));
}

const human ={
    ism: "Ali",
    familiya:"Valiyev",
    yosh:18
}

const oyimShaharaholisi= [
     {ism:"sarvar", yosh:18,gender:"erkak"},
     {ism:"shahlo", yosh:14,gender:"ayol"},
     {ism:"sevara", yosh:28,gender:"ayol"},
     {ism:"bahrom", yosh:8,gender:"erkak"},
     {ism:"asliddin", yosh:18,gender:"erkak"},
     {ism:"munisa", yosh:19,gender:"ayol"},
     {ism:"muhammadamin", yosh:34,gender:"erkak"},
     {ism:"rayhon", yosh:13,gender:"ayol"},
     {ism:"asror", yosh:39,gender:"erkak"},
     {ism:"zahro", yosh:10,gender:"ayol"},
     {ism:"abdulloh", yosh:28,gender:"erkak"},
     {ism:"zebo", yosh:9,gender:"ayol"},
]

const erkakArr=[]
const ayolArr=[]


function ayolErkakAjratish(aholi){
  for(let i=0;  i < aholi.length; i++)
    if(aholi[i].gender=="ayol"){
        ayolArr.push(aholi[i])
    }else {
        erkakArr.push(erkakArr[i])
    }
}
ayolErkakAjratish(oyimShaharaholisi)

console.log(ayolArr[3]);

function aholinisaralash(aholi){
    const balogatgachashaxs=[]
    const Armiyagayaroqlishaxs=[]
    const kattashxslar=[]

    for (let i = 0; i < aholi.length; i++) {
        const shaxs = aholi[i];
        if(shaxs.yosh >18  && shaxs.yosh<27){
            Armiyagayaroqlishaxs.push(shaxs)
        }else if (shaxs.yosh<18){
            balogatgachashaxs.push(shaxs)
        }else{
            kattashxslar.push(shaxs)
         }
        }  
        const saralangantoplam={
            armiyaYoshdagilar: Armiyagayaroqlishaxs,
            osmirlar: balogatgachashaxs,
            kattalar: kattashxslar   
        }
    return saralangantoplam

}
const saralangantoplam=aholinisaralash(oyimShaharaholisi)
console.log(saralangantoplam);