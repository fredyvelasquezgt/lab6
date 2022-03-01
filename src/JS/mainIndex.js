export const moveCard = () => {
    try {
        let ball = document.getElementById("IMG");
  
        var myVar = setInterval(spostaDiv, 90);
        var margin = 0;

        let l = window.screen.width;
        let w = 1300;
        let regreso = false;

       

        function spostaDiv() {
        
            if(!(ball===null)){
                if(margin<160 && !regreso) {
                    margin += 10;
                    ball.style.marginLeft = margin + "px";
                }else{
                    regreso = true;
                }
    
                if(margin>0 && regreso){
                    margin -= 10;
                    ball.style.marginLeft = margin + "px";
    
                }else{
                    regreso = false;
                }

            }
           


        }
        
    } catch (error) {
        
    }
    
};