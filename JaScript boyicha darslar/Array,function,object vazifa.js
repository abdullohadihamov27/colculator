
const maktaboquvchilarsoni= [
    {ism:"sarvar", yosh:9,gender:"erkak", sinf:2},
    {ism:"shahlo", yosh:14,gender:"ayol", sinf:7},
    {ism:"sevara", yosh:8,gender:"ayol", sinf:1},
    {ism:"bahrom", yosh:8,gender:"erkak", sinf:8},
    {ism:"asliddin", yosh:18,gender:"erkak", sinf:11},
    {ism:"munisa", yosh:17,gender:"ayol", sinf:3},
    {ism:"muhammadamin", yosh:14,gender:"erkak", sinf:5},
    {ism:"rayhon", yosh:13,gender:"ayol", sinf:6},
    {ism:"asror", yosh:12,gender:"erkak", sinf:10},
    {ism:"zahro", yosh:10,gender:"ayol", sinf:10},
    {ism:"abdulloh", yosh:6,gender:"erkak", sinf:4},
    {ism:"zebo", yosh:9,gender:"ayol", sinf:3},
    {ism:"bekzod", yosh:18,gender:"erkak", sinf:9},
    {ism:"Azizbek", yosh:7,gender:"erkak", sinf:11},
    {ism:"laylo", yosh:13,gender:"ayol", sinf:4},
    {ism:"muhayo", yosh:12,gender:"ayol", sinf:7},
    {ism:"muhammadqodir", yosh:9,gender:"erkak", sinf:1},
]

function sinflarnitaqsmlash(sinf){
    const birinchitortinchisinf=[]
    const beshinchitoqqizinchisinf=[]
    const oninchionbirinchisinf=[]

    for (let i = 0; i < sinf.length; i++) {
        const sinflar = sinf[i];
        
        if(sinflar.sinf > 1 && sinflar.sinf <=4){
            birinchitortinchisinf.push(sinflar)
        }else if(sinflar.sinf >= 5 && sinflar.sinf <=9){
            beshinchitoqqizinchisinf.push(sinflar)
        }else if(sinflar.sinf >= 10 && sinflar.sinf <=11) {
            oninchionbirinchisinf.push(sinflar)
        }
    }
    const sinflartoplami={
        boshlangich: birinchitortinchisinf,
        orta: beshinchitoqqizinchisinf,
        yuqori:oninchionbirinchisinf
    }
    return sinflartoplami
}
const sinflartoplami =sinflarnitaqsmlash(maktaboquvchilarsoni)
console.log(sinflartoplami);

const sinflarboyichataqsimot =sinflarnitaqsmlash(maktaboquvchilarsoni)


function ayolOgilajratish(maktaboquvchilarsoni){
     let ogilbollarsoni=0
     let qizbollarsoni=0
     for(let i=0; i<maktaboquvchilarsoni.length; i++){
         if(maktaboquvchilarsoni[i].gender=="erkak"){
             ogilbollarsoni++
         }else {
             qizbollarsoni++
         }
     }
     return {ogilbollarsoni,qizbollarsoni}
 }   
   const boshlangichlar= sinflarboyichataqsimot.boshlangich
   const ogilqizsoniboshlangich= ayolOgilajratish(sinflarboyichataqsimot.boshlangich)

const {ogilbollarsoni:boshlangichbollar, qizbollarsoni:boshlangichqizlar} = ayolOgilajratish(sinflarboyichataqsimot.boshlangich)
console.log(boshlangichbollar, boshlangichqizlar);

const {ogilbollarsoni:ortabollar, qizbollarsoni:ortaqizlar} = ayolOgilajratish(sinflarboyichataqsimot.orta)
console.log(ortabollar,ortaqizlar);

const {ogilbollarsoni:yuqoribollar, qizbollarsoni:yuqoriqizlar} = ayolOgilajratish(sinflarboyichataqsimot.yuqori)
console.log(yuqoribollar,yuqoriqizlar);



function pasport(yosh){
    const oninchionbirinchisinf=[]

    for (let i = 0; i < yosh.length; i++) {
        const pasport = yosh[i];
        
        if( pasport.yosh >= 16){
            oninchionbirinchisinf.push(pasport)
        }else {
            console.log(`Ushbu bola ${yosh[i].ism}  ${yosh[i].yosh} da hali balogat yoshga yetmagan`);
        }
    }
  const pasportlarson={
    pasportOluvchiodamlar:oninchionbirinchisinf
  }
  return pasportlarson
}
const pasportlarson = pasport(maktaboquvchilarsoni)
console.log(pasportlarson);