        const canvas = document.getElementById( "myCanvas" );
        const context = canvas.getContext( "2d" );
        var count = 1;
        var countsize = 2;
        var image = document.getElementById("beerimage1");
        let timeout;
        
        var box = document.getElementById("box")
        box.onmousedown = function() {
            changeimage()
        }
        var music = document.getElementById("music")
        music.onmousedown = function() {
            play()
        }

        function play(){
            var audio = new Audio('All Of The Lights.mp3');
            audio.play();
        }
        function changeimage(){
            if(count==countsize)
            {
                count=1;
            }
            else{
                count++;
            }
            image = document.getElementById("beerimage"+count)
        }
        function setup() {
        clearTimeout(timeout); // ADDED
        var width = window.innerWidth-40; // CHANGED
        var height = window.innerHeight-40; // CHANGED

        canvas.width = width; // ADDED
        canvas.height = height //ADDED

        var text = {
            draw:function( ctx , text )
            {
                ctx.font = "75px sans"
                ctx.fillText(text, width/2-420, height/2);
            }
        }
        var ball = {
            x: 100,
            y: 100,
            w: 400,
            h: 400,
            xSpeed: 3,
            ySpeed: 3,
            draw: function( ctx ) {
                ctx.drawImage(image, this.x, this.y, this.w, this.h)
            },
            move: function() {
                this.x += this.xSpeed;
                this.y += this.ySpeed;
            }
        }

        timeout = setInterval( function(){
            
            context.clearRect( 0, 0, width, height );
            context.strokeRect( 0, 0, width, height );
            
            ball.move();
            
            // right 
            if ( ball.x + (ball.w) >= width ) {
                ball.x = width - (ball.w);
                ball.xSpeed = -ball.xSpeed;
            }
            
            // left
            if ( ball.x  <= 0 ) {
                ball.x = 0;
                ball.xSpeed = -ball.xSpeed;
            }
            
            // down
            if ( ball.y + (ball.h) >= height ) {
                ball.y = height - (ball.h);
                ball.ySpeed = -ball.ySpeed;
            }
            
            // up
            if ( ball.y <= 0 ) {
                ball.y = 0;
                ball.ySpeed = -ball.ySpeed;
            }
            
            ball.draw( context );
            text.draw(context,"\"I am not a womanizer\"");
            
        }, 10 );
        }
        window.onresize = setup;
        setup();