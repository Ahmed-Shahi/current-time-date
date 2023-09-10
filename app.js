// var hour = 0
// var gethour = document.getElementById('hour')

// setInterval(function(){
//     sec++
//     getsec.innerHTML = sec
//     if(sec>=5){
//         min++
//         getmin.innerHTML = min
//         sec =0
//     } 
// },1000)





// var min = 0
// var getmin = document.getElementById('min')
// var sec = 0
// var getsec = document.getElementById('sec')
// var  fordate = new Date()
// var convert = fordate.toString()
// var forsec = convert.slice(22,25)
// var formin = convert.slice(19,21) 
// var minute =  getmin.innerHTML = formin

// var a =  setInterval(function(){
//         if(forsec == forsec){
//             forsec++
//             getsec.innerHTML = forsec
//           }
//         //  if(forsec == forsec ){
//         //     getmin.innerHTML = formin
//         // }
//     },1000)
    
    

    // console.log(a)

    // if(formi == 30){
    //     min = 0

    // }
    // clearInterval(a)
        
                        // if(forsec == 30){
        //     min = 0
        // }
    
          // if(forsec > 60 && formin == formin){
        //     formin++
        //     getmin.innerHTML = formin
        //     // forsec = 0
        // }

//   if (formin == formin  ){
//         getmin.innerHTML = formin
//  }

//  if(a == 45){
//         formin++
//         a = 0

// }
// //    if( a = 60 ){
// //     b++
// //     a = 0
// //    }
    // document.write(formin)  
// document.write(formin)


function clock() {
  
  var h = document.getElementById('hour')
  var m = document.getElementById('min')
  var s = document.getElementById('sec')
  
  
  var hour = new Date().getHours()
  var min = new Date().getMinutes()
  var sec = new Date().getSeconds()


  if( hour > 12 ){
    hour  = hour - 12;
  }
  hour = hour < 10 ? '0'+hour : hour
  min = min < 10 ? '0'+min : min
  sec = sec < 10 ? '0'+sec : sec

  h.innerHTML = hour
  m.innerHTML = min
  s.innerHTML = sec


}
setInterval(clock,1000)





















