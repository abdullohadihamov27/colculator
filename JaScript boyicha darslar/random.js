
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

function saralash(){
    const birinchibosqich=[]
    const ikkinchibosqich=[]
    const uchinchibosqich=[]

    for (let i=0; i<Abutrentlar.length;i++){
        const randomNamber= Math.floor(Math.random()*50)+70
        Abutrentlar[i].ball=randomNamber
        
        if(randomNamber>=75 && randomNamber<=80){
            birinchibosqich.push(Abutrentlar[i])
        }}
    for (let i=0; i<birinchibosqich.length;i++){
            const randomNamber= Math.floor(Math.random()*50)+70
            Abutrentlar[i].ball=randomNamber
            
        if(randomNamber>80 && randomNamber<=90){
             ikkinchibosqich.push(Abutrentlar[i])
            }}
     for (let i=0; i<ikkinchibosqich.length;i++){
                const randomNamber= Math.floor(Math.random()*50)+70
                Abutrentlar[i].ball=randomNamber
                
        if(randomNamber>90){
                    uchinchibosqich.push(Abutrentlar[i])
                }

} const ballarToplami={
    UchinchiOrindagilar:birinchibosqich,    
    IkkinchiOrindagilar:ikkinchibosqich,
    BirinchiOrindagilar:uchinchibosqich
}
return ballarToplami
}const ballarToplami=saralash(Abutrentlar)
console.log(ballarToplami);




// const abutureyentlar = [
//     {ism:"sarvar",familiya:"turgunov"},
//     {ism:"shahlo",familiya:"rasulova"},
//     {ism:"sevara",familiya:"karimova"},
//     {ism:"bahrom",familiya:"kimdirov"},
//     {ism:"asliddin",familiya:"abdulazizov"},
//     {ism:"munisa",familiya:"rizayeva"},
//     {ism:"muhammadamin",familiya:"mahmudov"},
//     {ism:"rayhon",familiya:"tohirov"},
//     {ism:"asror",familiya:"karimov"},
//     {ism:"zahro",familiya:"sadirdinova"},
//     {ism:"abdulloh",familiya:"karimov"},
//     {ism:"zebo",familiya:"axmadaliyeva"},
//     {ism:"bekzod",familiya:"aliyev"},
//     {ism:"Azizbek",familiya:"raimov"},
//     {ism:"laylo",familiya:"nmadirova"},
//     {ism:"muhayo",familiya:"botirova"},
//     {ism:"muhammadqodir",familiya:"sharipov"},
//     {ism:"ozoda",familiya:"mamarasulova"},
//     {ism:"asliddin",familiya:"adihamov"},
//     {ism:"shohjahon",familiya:"xasanboyev"},
// ]

// function imtixonNatijasiniTekshirish(oquvchilar, minBall) {
//     const otganTalabalar = []
//     const yiqilganTalabalar = []
//     for (let i = 0; i < oquvchilar.length; i++) {
//         const oquvchi = oquvchilar[i];
//         if(oquvchi.ball >= minBall ){
//             otganTalabalar.push(oquvchilar[i])
//         }else {
//             yiqilganTalabalar.push(oquvchi)
//         }
//     }

//     return {otganTalabalar, yiqilganTalabalar}
// }

// function randomBalBerish(oquvchilar, minBall, maxBall){

//     for (let i = 0; i < oquvchilar.length; i++) {
//         const randomNamber= Math.floor(Math.random()*maxBall)+minBall
//         oquvchilar[i].ball = randomNamber
//     }
//     return oquvchilar
// }

// function main(){
// const birinchiBosqichImtixoni = randomBalBerish(abutureyentlar, 70, 80)
// const birinchiBosqichNatijalari = imtixonNatijasiniTekshirish(birinchiBosqichImtixoni, 100)


// const ikkinchiBosqichImtixoni = randomBalBerish(birinchiBosqichNatijalari.otganTalabalar, 70, 80)
// const ikkinchiBosqichNatijalari = imtixonNatijasiniTekshirish(ikkinchiBosqichImtixoni, 120)


// const uchinchiBosqichImtixoni = randomBalBerish(ikkinchiBosqichNatijalari.otganTalabalar, 70, 80)
// const uchinchiBosqichNatijalari = imtixonNatijasiniTekshirish(uchinchiBosqichImtixoni, 130)


//     if(uchinchiBosqichNatijalari.otganTalabalar.length > 3){
//         for (let i = 0; i < uchinchiBosqichNatijalari.otganTalabalar.length; i++) {
//             const uchinchiBosqichTalabasi = uchinchiBosqichNatijalari.otganTalabalar[i];
//             for(let j = 0; j < ikkinchiBosqichNatijalari.otganTalabalar.length; j++){
//                     const ikkinchiBosqichTalabasi = ikkinchiBosqichNatijalari.otganTalabalar[i]
//                     if(uchinchiBosqichTalabasi.ism == ikkinchiBosqichTalabasi.ism){
//                         uchinchiBosqichNatijalari.otganTalabalar[i].umumiyBall = ikkinchiBosqichTalabasi.ball + uchinchiBosqichTalabasi.ball
//                         break
//                     }
//             }
//         }
//     }
//     console.log(uchinchiBosqichNatijalari.otganTalabalar);
// }

// main()