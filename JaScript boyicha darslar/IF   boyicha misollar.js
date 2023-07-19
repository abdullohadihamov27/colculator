function if1(a){
    if(a>0){
        console.log( "if 1-misol",a+1);
    }
}

// if1 (4)

function if2 (a){
    if(a>0){
        console.log("if 2-misol",a+1);
    }else if (a<0){
        console.log("if 2-misol",a/2);
    }
}
// if2(9)

function if3 (a){
    if(a>0){
        console.log("if 3-misol",a+1);
    }else if (a<0){
        console.log("if 3-misol",a/2);
    }else if(a==0){
        console.log("if 3-misol",a=10);
    }

}
// if3(-12)

function if4(a,b,c) {
    let musbatsoni
      if(0<a){
        console.log(musbatsoni ++);
      }
      if(0<b){
        console.log(musbatsoni++);
      }
      if(0<c){
        console.log(musbatsoni++);
      }
}
// if4(8,5,-6)

function if5(a,b,c) {
  let musbatsoni=0 , manfiyson=0

  if(a>0){
    musbatsoni++
  }else {
    manfiyson++
  }

  if(b>0){
    musbatsoni++
   }else {
        manfiyson++
  }

  if(c>0){
    musbatsoni++
  }else {
    manfiyson++
  }
  console.log(  "manfiyson", manfiyson,  "musbatson"  ,musbatsoni);

}
// if5 (4,-9,7)

function if6 (a,b){
    if(a>b){
        console.log("a soni katta ", a);
    }else if (a<b){
        console.log("b soni katta ", b);
    }
}
// if6(89,9)

function if7 (a,b){
    if(a>b){
        console.log("if 7-misol:",2);
    }else if (a<b){
        console.log("if 7-misol:",1);
    }
}
// if7(53,6)


function if8(a,b){  
    if(a>b){
        console.log("if 8-misol:",a,b);
    }else if (a<b){
        console.log("if 8-misol:",b,a);
    }
}
// if8(3,4)

function if10(a,b){
      if (a!=b){
        console.log( "if 10-misol", a+b);
      }else if(a==b){   
        a=0
        b=0
        console.log( "if 10-misol",a,b);
      }
}
// if10(5,5)

function if11(a, b){
    if (a!=b && a>b){
        console.log("if 11-misol" , a);
    }else if (a!=b && a<b){
        console.log( "if 11-misol", b);
    }else{
        console.log(a=0, b=0);
    }
}
// if11(5,5)


function if12(a,b,d){
    
    if( a > b && b < d ){ console.log( "if 12-misol:", b)}

    else if (a < b && a < d){ console.log("if 12-misol:", a)}
 
    else if(a > d && b > d){ console.log("if 12-misol:", d)}



}
// if12(1,7,4)

function if13(a,b,d){
    if(a<b && b<d && b>a && d>b) {
        console.log("if 13-misol:",b);
    }else if (a<d && a>b && d>a && b<a){
        console.log("if 13-misol:",a);
    }else if(b<d && a<b && d>b && b>a) {
        console.log("if 13-misol:",d);
    }
}
// if13(2,3,4)


function if14(a,b,d){
    
    if(a>b){ console.log( "if 14-misol:", b,a)}

    else if (a<b){ console.log("if 14-misol:", a,b)}
 
    else if(a>d){ console.log("if 14-misol:", d,a)}

    else if (a<d){ console.log("if 14-misol:", a,d)}

    else if (b>d){ console.log( "if 14-misol:",d,b) }

    else if (b<d){ console.log( "if 14-misol:",b,d)}


}
// if14(1,7,4)


function if15(a,b,d){
    
    if(a>b && b > d && b > a && a > d){ console.log( a+b , a,b)}

    else if (a > d && d > b && d > a && b > d){ console.log( a + d , a,d )}
 
    else if (b > d && a < b && d < b && b > a){ console.log( b + d , b,d);}


}
// if15 (4,3,1)

function if16(a,b,d) {
    if(a < b && b < d){
        console.log(2*a, 2*b, 2*d);
    }else {
        console.log(-1*a, -1*b, -1*d );
    }
}
// if16(3,-7,5)

function  if17 (a,b,d){
     if(a < b && b < d ){
        console.log(2*a, 2*b, 2*d);
     }else  if( a > b && b > d ){
        console.log( 2*a, 2*b, 2*d );
    }else {
        console.log(-1*a, -1*b, -1*d );
    }
}
// if17(9,7,5)


function if18 (a,b,d ){
    if (a==b && d!=a){ console.log(3); }

    else if (a==d && b!=d){ console.log(2); }
    
    else  if (d==b && a!=b ){ console.log(1); }
    else {
        console.log("bunday son mavjud emas ");
    }
}
// if18( 3,7,3 )

function if19(a,b,d,c){
    if( a==b && b==d && a!=c ){ console.log(4); }

   else if( a==b && b==c && a!=d ){ console.log(3); }

    else if( a==c && c==d && a!=b ){ console.log(2); }

    else if( c==b && b==d && b!=a ){ console.log(1); }
    else {
        console.log("bunday son mavjud emas ");
    }

}
// if19(3,8,9,3)