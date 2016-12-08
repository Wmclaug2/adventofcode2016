// Entire list of directions
var fullDirections = 'R5, L2, L1, R1, R3, R3, L3, R3, R4, L2, R4, L4, R4, R3, L2, L1, L1, R2, R4, R4, L4, R3, L2, R1, L4, R1, R3, L5, L4, L5, R3, L3, L1, L1, R4, R2, R2, L1, L4, R191, R5, L2, R46, R3, L1, R74, L2, R2, R187, R3, R4, R1, L4, L4, L2, R4, L5, R4, R3, L2, L1, R3, R3, R3, R1, R1, L4, R4, R1, R5, R2, R1, R3, L4, L2, L2, R1, L3, R1, R3, L5, L3, R5, R3, R4, L1, R3, R2, R1, R2, L4, L1, L1, R3, L3, R4, L2, L4, L5, L5, L4, R2, R5, L4, R4, L2, R3, L4, L3, L5, R5, L4, L2, R3, R5, R5, L1, L4, R3, L1, R2, L5, L1, R4, L1, R5, R1, L4, L4, L4, R4, R3, L5, R1, L3, R4, R3, L2, L1, R1, R2, R2, R2, L1, L1, L2, L5, L3, L1'; 
//converted to Array to make it easier to work with
var directionsArray = fullDirections.split(', ');
// North = 0, East = 1, South = 2, West = 3; UNUSED - FOR DEV ONLY
var facing = 0;
// Base Coordinates
var x = 0;
var y = 0;
var historyz = [];
var found = 0;
//For loop to iterate through each direction
for (var i = 0; i < directionsArray.length; i++){
	//split array element to get direction and amount of moves
	var direction = directionsArray[i].slice(0,1);
	var moves = parseInt(directionsArray[i].slice(1));
	//determine direction to move
	if (direction == 'R'){
		if (facing === 3){
			facing = 0;
		}else{
			facing += 1;
		}
	}else if(direction == 'L'){ 
		if (facing === 0){
			facing = 3;
		}else{
			facing -= 1;
		}
	}else{
		console.log("No direction found");
	}
	//determine how many steps to move
	for (var j = 0; j < moves;j++){
		if (facing === 0){
			y+=1;
		}else if (facing === 1){
			x+=1;
		}else if (facing ===2){
			y-=1;
		}else if (facing === 3){
			x-=1;
		}
		//Solves for second section - loops to check if x and y have already been visited
		
		if(found === 0){
			for (var w = 0; w < historyz.length;w++){
				if(historyz[w].lat === x){
					if (historyz[w].long === y){
						var locationFound = x+y;
						if (locationFound < 0){
							locationFound +=-locationFound+-locationFound;
						}
						console.log("Found! The location is "+locationFound+' blocks away!');
						found = 1;
					}
				}
			}
		}
		//pushes each location visited while travelling to array to be compared, each object is a location that has been visited
		historyz.push({'lat': x,'long':y});
	}
}
console.log("Lat: "+ x +", Long: "+y);

