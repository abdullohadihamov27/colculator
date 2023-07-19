const kiritilganson = 7
const raqamhonalarsoni =  kiritilganson.toString().length

if(raqamhonalarsoni==1){
    const birlikifodasi = birlikuchun(kiritilganson)
    console.log(birlikifodasi)
}
else if (raqamhonalarsoni==2){
    const onlik=parseInt(kiritilganson/10)
    const birlik = kiritilganson%10

    const onlikifodasi= onlikuchun(onlik)
    const birlikifodasi=birlikuchun(birlik)

    console.log(onlikifodasi,birlikifodasi);
}


function birlikuchun(raqam){
    let sonifodasi

    switch (raqam) {
        case 1:
            sonifodasi="bir"
            break;
        case 2:
            sonifodasi="ikki"
            break;
        case 3:
            sonifodasi="uch"
            break;
        case 4:
            sonifodasi="to'rt"
            break;
        case 5:
            sonifodasi="besh"
            break;
        case 6:
            sonifodasi="olti"
            break;
        case 7:
            sonifodasi="yetti"
            break;
        case 8:
            sonifodasi="sakkiz"
            break;
        case 9:
            sonifodasi="to'qqiz"
            break;
        default:
            sonifodasi="   "
    }
    return sonifodasi
} 

function onlikuchun(raqam){
    let sonifodasi

    switch ((raqam)) {
        case 1:
            sonifodasi="on"
            break;
        case 2:
            sonifodasi="yigirma"
            break;
        case 3:
            sonifodasi="o'ttiz"
            break;
        case 4:
            sonifodasi="qiriq"
            break;
        case 5:
            sonifodasi="ellik"
            break;
        case 6:
            sonifodasi="oltmish"
            break;
        case 7:
            sonifodasi="yetmish"
            break;
        case 8:
            sonifodasi="sakson"
            break;
        case 9:
            sonifodasi="toqsan"
            break;
        default:
            sonifodasi="   "
    }
    return sonifodasi
} 