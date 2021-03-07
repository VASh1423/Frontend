//Open Close Principle

class shape{
  area(){
    throw new Error('Should be implemented')
  }
}

class Square extends shape{
  constructor(side){
    super()
    this.side = side
  }

  area(){
    return this.side**2
  }
}

class Rect extends shape{
  constructor(width, height){
    super()
    this.width = width
    this.height = height
  }

  area(){
    return this.height*this.width
  }
}

class calc{
  constructor(shapes=[]){
    this.shapes = shapes
  }

  sum(){
    return this.shapes.reduce((res, shape) => res += shape.area(), 0)
  }
}

console.log(new calc([
  new Square(6), 
  new Square(5),
  new Rect(3, 4)
]).sum())