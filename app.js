let paragraph = document.getElementsByClassName("paragraphe");

for (let i = 0; i < 5; i++){
   if ((i+1)%2 === 0){
       continue;
   }
   else if (i === paragraph.length){
       break;
   }
   else {
       paragraph[i].innerHTML = i+1;
   }
}