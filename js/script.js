$(function()
{
    var color="";
    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');
    var x = 100;
    var y = 300;
    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(100, 300);
    context.lineTo(650, 300);
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    //Flecha...
    context.beginPath();
    context.moveTo(640, 290);
    context.lineTo(650, 300);
    context.lineTo(640, 310);
    context.lineTo(640, 290);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = 'black';
    context.fill();
    context.stroke();
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("Amplitud", 60, 30);
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("Tiempo", 660, 300);
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("0", 80, 320);
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("1", 80, 250);
    //pinta linea en 0 Recibe donde termina la linea anterior
    $(document).keypress(function(event)
    {
        if(x<650)
        {     
            // Señal en 0
            if(event.keyCode === 48)
            {    
                if(y==250)
                {
                   color = randomColor();
                   crearLinea(x,y,x,y+50,color);
                   y+=50;
                   crearLinea(x,y,x+50,y,color);
                   x+=50;
                }      
                else if(y==300)
                {
                    color = randomColor();
                    crearLinea(x,y,x+50,y,color);
                    x+=50;
                }
            }
            //Señal en 1 
            else if(event.keyCode === 49)
            {
             //    console.log("x1.."+x+" y1.."+y+" x2.."+x+" y2..."+y-50);
                 if(y===300)
                 {
                    color = randomColor();
                    crearLinea(x,y,x,y-50,color);
                    y-=50;
                    crearLinea(x,y,x+50,y,color);
                    x+=50;
                 }
                 else if(y === 250)
                 {
                    color = randomColor();
                    crearLinea(x,y,x+50,y,color);
                    x+=50;
                 }                    
            }
        }
        else
        {
           creaFlechaFinal();
        }        
        console.log(x); 
    });
    function crearLinea(x1,y1,x2,y2,color)
    {   
        console.log("crearLinea......")
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.lineWidth = 3;
        context.strokeStyle = color;
        context.stroke();
    }
    function randomColor()
    {
       // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
       return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
     };

     function creaFlechaFinal()
     {         
        context.beginPath();
        context.moveTo(x-10, y-10);
        context.lineTo(x, y);
        context.lineTo(x-10, y+10);
        context.lineTo(x-10, y-10);
        context.lineWidth = 1;
        context.strokeStyle = randomColor();
        context.fillStyle = randomColor();
        context.fill();
        context.stroke();
    };
});