// console.log(case1(6));

function case1(kunlar ){
    let kun;

    switch (kunlar){
        case 1:
            kun= "dushanba"  
            break
        case 2:
             kun="seshanba" 
            break
        case 3:
            kun="chorshanba"
            break
        case 4:
            kun="payshanba"
            break
        case 5:
            kun="juma" 
            break
        case 6:
            kun="shanba"
            break
        case 7:
            kun="yakshanba"
            break
            default:
                kun="bunday kun mavjud emas "  
    }
    return kun
}


// console.log(case2(5));

function case2(baho ){
    let olganbaho;

    switch (baho){
        case 1:
            olganbaho= "yomon"  
            break
        case 2:
            olganbaho="qoniqarsz" 
            break
        case 3:
            olganbaho="qoniqarli"
            break
        case 4:
            olganbaho="yaxshi"
            break
        case 5:
            olganbaho="A'lo" 
            break
            default:
            olganbaho=" XATO "  
    }
    return olganbaho
}
  

// console.log( case3(12));


function case3 (Oy){
    let oyRaqami;

    switch (Oy){
        case 1:
            oyRaqami ="   dekabr "
            break;
        case 2:
            oyRaqami = "  ikkinchi  yanvar "   
            break;
        case 3:
            oyRaqami= "  oxingi  fevral  "
            break;
        case 4:
            oyRaqami = " bahorning   mart  "   
            break;      
        case 5:
            oyRaqami = " bahorning ikkinchi  aprel  "   
            break;
        case 6:
            oyRaqami = " bahorning oxirgi  may  "   
            break;
        case 7:
            oyRaqami = " yozning   iyul  "   
            break;
        case 8:
            oyRaqami = " yozning ikkinchi  iyun  "   
            break;
        case 9:
            oyRaqami = " yozning oxirgi  avgust  "   
            break;
        case 10:
            oyRaqami = " kuzning   sentabr  "   
            break;
         case 11:
            oyRaqami = " kuzning ikkinchi  oktabr  "   
            break;
          case 12:
            oyRaqami = " kuzning oxirgi  nayabr  "   
            break;
            default:
                oyRaqami =" mavjud emas "
    }
    return oyRaqami
}


                // console.log( case4(12));


function case4 (Oy){
    let oykunlari;

    switch (Oy){
        case 1:
            oykunlari =" yanvar 31 kun "
            break;
        case 2:
            oykunlari = " fevral 28 kun  "   
            break;
        case 3:
            oykunlari= " mart 31 kun "
            break;
        case 4:
            oykunlari = " Aprel 30 kun  "   
            break;      
        case 5: 
            oykunlari = " May 31 kun"   
            break;
        case 6:
            oykunlari = " uyun 30 kun "   
            break;
        case 7:
            oykunlari = " iyul 31 kun  "   
            break;
        case 8:
            oykunlari = "Avgust 31 kun  "   
            break;
        case 9:
            oykunlari = " sentabr 30 kun  "   
            break;
        case 10:
            oykunlari = " oktabr 31 kun "   
            break;
         case 11:
            oykunlari = "noyabr 30 kun  "   
            break;
          case 12:
            oykunlari = " dekabr 31 kun  "   
            break;
            default:
                oykunlari =" mavjud emas "
    }
    return oykunlari
}


// console.log(case5(4));

function case5(ishoralar){
 let amal;
  switch(ishoralar){
    case 1:
        amal="Ayrish"
        break;
    case 2:
        amal="qoshish"
        break;
    case 3:
        amal="kopaytirish" 
        break;
    case 4:
        amal="bolish" 
        break;
      default:              
         amal="bunday amal mavjud emas "

    }
    return amal
}

console.log(case6(5));

function case6(birliklar){
    let uzunlikbirliklari
    switch(birliklar){
        case 1:
            uzunlikbirliklari="1 dm = 0.1 metr"
            break
        case 2:
            uzunlikbirliklari="1 km = 1000 metr" 
            break
        case 3:
            uzunlikbirliklari="1 metr"
            break
        case 4:
            uzunlikbirliklari= "1 ml = 0.001 metr"   
            break
        case 5:
            uzunlikbirliklari=" 1 sm = 0.001 metr"
            break
          default:
             uzunlikbirliklari="mavjud emas "
    }
    return uzunlikbirliklari
}


console.log(case7(1));
function case7(birliklar){
    let ogirlikbirligi
    switch(birliklar){
        case 1:
            ogirlikbirligi=("1 kg")
            break
        case 2:
            ogirlikbirligi= (" 1mlg = 0.0000001 kg")
            break
        case 3:
            ogirlikbirligi="1 gr= 0.001kg"
            break
        case 4:
            ogirlikbirligi= "1 t = 1000kg"   
            break
        case 5:
            ogirlikbirligi=" 1 sentiner = 100 kg"
            break
          default:
            ogirlikbirligi="mavjud emas "
    }
    return ogirlikbirligi
}