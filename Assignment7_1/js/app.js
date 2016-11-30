function calculateArea(radius){
	var rad = parseInt(radius);
	var area = rad * rad * 3.14;

	return area;
}

console.log("Area of circle is: "+calculateArea(7));