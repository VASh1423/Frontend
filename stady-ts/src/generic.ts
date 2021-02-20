// const promise = new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve('Promise resolve')
//   }, 2000)
// })

// promise.then(data => {
//   console.log(data)
// })



function mergeObject<T extends object, R extends object>(a: T, b: R): T & R{
  return Object.assign({}, a, b)
}

const merged = mergeObject({name: 'Vladimir'}, {age: 21})
console.log(merged.name, merged.age);

interface ILength{
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `В этом объекте ${value.length} симолов`
  }
}



function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R){
  return obj[key]
}

const person = {
  name: 'Vladimir',
  age: 21
}

console.log(getObjectValue(person, 'name'));


class Collection<T extends string | number | boolean>{
  constructor(private _items: T[] = []) {}

  add(item: T){
    this._items.push(item)
  }

  remove(item: T){
    this._items = this._items.filter( i => i !== item)
  }

  getItems(): T[]{
    return this._items
  }
}

const strings = new Collection<string>(['cc', 'dcdc', 'btbg'])
strings.add('gbgbgb')
strings.remove('cc')
console.log(strings.getItems());



interface Car{
  model: string,
  year: number
}

function createAndValidateCar(model: string, year: number): Car{
  const car: Partial<Car> = {}

  if(model.length > 3){
    car.model = model
  }

  if(year > 2000){
    car.year = year
  }

  return car as Car
}


const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift()