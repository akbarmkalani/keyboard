





let _keyHand = document.querySelectorAll('.key')
// let  buttonKey =  document.querySelectorAll(".key-hand>div>spna")
const inpBox  = document.getElementById("input-box")
  
 console.log(inpBox);
   
 let  keyHandlar = ''


_keyHand.forEach((val)=>{
   
    val.addEventListener('click', function(){
         
      
        keyHandlar = val.innerText
          inpBox.value += keyHandlar         
    })
    
})

document.getElementById('delet').addEventListener("click", ()=> {
    inpBox.value  = inpBox.value.slice(0, -1);
    console.log('click');
})

document.getElementById('space').addEventListener("click", ()=> {
    inpBox.value += ' '
    console.log('click');
})

document.getElementById('enter').addEventListener("click", ()=> {
    inpBox.value += '\n '
    console.log('click');
})

 document.getElementById('Caps').addEventListener('click', function(){
    _keyHand.forEach((caps)=> {
         caps.classList.toggle('caps-l')
    })
 })
 