
const Abutrentlar=[
    {ism:"sarvar",familiya:"turgunov"},
    {ism:"shahlo",familiya:"rasulova"},
    {ism:"sevara",familiya:"karimova"},
    {ism:"bahrom",familiya:"kimdirov"},
    {ism:"asliddin",familiya:"abdulazizov"},
    {ism:"munisa",familiya:"rizayeva"},
    {ism:"muhammadamin",familiya:"mahmudov"},
    {ism:"rayhon",familiya:"tohirov"},
    {ism:"asror",familiya:"karimov"},
    {ism:"zahro",familiya:"sadirdinova"},
    {ism:"abdulloh",familiya:"karimov"},
    {ism:"zebo",familiya:"axmadaliyeva"},
    {ism:"bekzod",familiya:"aliyev"},
    {ism:"Azizbek",familiya:"raimov"},
    {ism:"laylo",familiya:"nmadirova"},
    {ism:"muhayo",familiya:"botirova"},
    {ism:"muhammadqodir",familiya:"sharipov"},
    {ism:"ozoda",familiya:"mamarasulova"},
    {ism:"asliddin",familiya:"adihamov"},
    {ism:"shohjahon",familiya:"xasanboyev"},
]

function imtixonNatijasiniTekshirish(oquvchilar,minBall){
    const otganTalabalar=[]
    const yiqilganTalabalar=[]
    for (let i=0; i<oquvchilar.lenght; i++){
        const oquvchi=oquvchilar[i]
        if(oquvchi.ball >= minBall){
            otganTalabalar.push(oquvchi[i])
        }else{
            yiqilganTalabalar.oush(oquvchi)
        }
    }
    return{otganTalabalar,yiqilganTalabalar}
}

function randomBalBerish(oquvchilar,minBall,maxBall){
    for (let i = 0; i < oquvchilar.lenght; i++) {
            const randomNamber =  Math.floor(Math.random()*maxBall)+minBall      
            oquvchilar[i]=randomNamber 
    }
    return oquvchilar

}

function main(){
    const birinchiBosqichImtixoni=randomBalBerish(Abutrentlar,80,90)
    const birinchiBosqichNatijalari = imtixonNatijasiniTekshirish(birinchiBosqichImtixoni, 110)

    const ikkinchiBosqichImtixoni = randomBalBerish(birinchiBosqichNatijalari.otganTalabalar,80,90)
    const ikkinchiBosqichNatijalari = imtixonNatijasiniTekshirish(ikkinchiBosqichImtixoni,120)

   const uchinchiBosqichImtixoni = randomBalBerish(ikkinchiBosqichNatijalari.otganTalabalar,80,90)
   const uchinchiBosqichNatijalari = imtixonNatijasiniTekshirish(uchinchiBosqichImtixoni,130)


   if(uchinchiBosqichNatijalari.otganTalabalar.length > 3){
    for (let i = 0; i < uchinchiBosqichNatijalari.otganTalabalar.length; i++) {
        const uchinchiBosqichTalabasi = uchinchiBosqichNatijalari.otganTalabalar[i];
        for(let j = 0; j < ikkinchiBosqichNatijalari.otganTalabalar.length; j++){
                const ikkinchiBosqichTalabasi = ikkinchiBosqichNatijalari.otganTalabalar[i]
                if(uchinchiBosqichTalabasi.ism == ikkinchiBosqichTalabasi.ism){
                    uchinchiBosqichNatijalari.otganTalabalar[i].umumiyBall = ikkinchiBosqichTalabasi.ball + uchinchiBosqichTalabasi.ball
                    break
                }
        }
    }
}
console.log(uchinchiBosqichNatijalari.otganTalabalar);
}
main()