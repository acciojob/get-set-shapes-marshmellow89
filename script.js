// //complete this code
// class Rectangle {
// 	constructor(width, height){
// 		this.width = width;
// 		this.height = height;
// 	}
// 	get width(){
//      return this.width;
// 	}
// 	get height(){
//      return this.height;
// 	}
// 	set newWidth(newWidth){
// 		this.width = newWidth;
		
// 	}
// 	getArea(){
// 		return this.width*this.height;
// 	}
// }

// class Square extends Rectangle {
// 	constructor(side){
// 		super(side, side)
// 		this.side = side;
		
// 	}
// 	getPerimeter(){
// 		return 4*side;
// 	}
// }

// // Do not change the code below this line
// window.Rectangle = Rectangle;
// window.Square = Square;


class Rectangle {
  constructor(width, height) {
    this._width  = width;
    this._height = height;
  }

  get width()  { return this._width;  }
  get height() { return this._height; }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);   // width = height = side
  }

  getPerimeter() {
    return 4 * this.side;   // or 4 * this.height
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square    = Square;
