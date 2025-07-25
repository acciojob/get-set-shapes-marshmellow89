//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.heigth = height;
	}
	get width(){
     return this.width;
	}
	get height(){
     return this.height;
	}
	getArea(){
		return `${this.width}*${this.height}`
	}
}

class Square extends Rectangle {
	constructor(width, height, side){
		super(width,height)
		this.side = side;
		
	}
	getPerimeter(){
		if(width==height){
			let width=side;
			let height=side;
			return 4*side;
		}else{
			throw new error("error in doing");
		}
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
