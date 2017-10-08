//Triangle Stars 
const space1 = function (spc) {
		if (spc<=0) {
			return " ";
		}

		return space1(spc-1) + ' '; 
	};

	const stars1 = function(sts) {
		if (sts<=0) {
			return " ";
		}

		return stars1 (sts-1) + '*';
	};

	const connect1 = function (star1,m) {
          if (star1===0) {
          	return;
      }
      console.log( space1(m-star1) + stars1(2*star1-1));
      return connect1(star1-1,m);
          }

          const triangleStars4 = function(star1) {
          	return connect1 (star1,star1)
          };

          triangleStars4(5);




//checkerboard
const stars = function (num, isSpace) {
	if (num===0) {
		return '';
	}
	if(isSpace) {
		return ' ' + stars(num, !isSpace);
	} else {

		return '*' + stars(num-1, !isSpace);
	}
};
	const connect = function (max,w,isSpace) {
	  if (w===0) {
	    return '';
	  }
	    console.log(stars(max,isSpace));
	    return connect(max,w-1,!isSpace);
	  };
	  
const checkerboard = function(k,isSpace) {
    connect(k,k,isSpace)
      	};
      	
  checkerboard(5,false);


//Pow
const pow = function(base,n) {

			if (n===0) {
				return 1;
			}
			return base * pow (base,n-1);
		};

		       
		
			console.log(pow(2,5));



//Reverse the string
const reverseString = function (str) {
    		if (str === '') 
    			return '';
    		else
    		return reverseString(str.substr(1)) + str.charAt(0); 

    	}

    	console.log(reverseString('rabbit'));  

