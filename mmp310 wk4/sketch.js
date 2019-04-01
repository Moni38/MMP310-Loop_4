/*
	new design 
    patterns loop many colors, many sizes 
	week 4
*/



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(150);
	rectMode(CENTER);
	noStroke();
	textAlign(300);
	
	 //making a row of Bigballs
    
	let ballSize = random(100, 300);
	let increment = ballSize;
	for (let x = 0; x <= width; x += increment) {
		
		let y = height/4 + random(-50, 200);
		
		ballSize = random(100, 500);
		
		let r = random(250);
		let g = random(150);
		let b = random(100);
        
		fill(r, g, b);
        
		ellipse(x , y, ballSize); // ball
        
        
		var randomChoice = random(300); //random choices 
		if (randomChoice > 2) {
			fill(randomChoice);
            
		} 
        
        else if (randomChoice > 1) {
			fill(randomChoice);
		}  
    
       //  sunBall

		fill(randomChoice);
		let sunSize = ballSize / 2;
		ellipse(x, y + sunSize + random(30), sunSize - 1, sunSize + 2);
        
        // more balls
        
        fill('pink');
		let balllSize = ballSize / 6;
		ellipse(x, y + balllSize + random(300), balllSize * 2, balllSize * 2);
        
        
		
	}
	
}




