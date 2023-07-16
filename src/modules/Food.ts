//食物类
class Food {
    element: HTMLElement
    constructor() {
        //不加！报错，相当于我们断言该数据不会为null
        this.element = document.querySelector('#food')!
    }
    //定义一个获取食物坐标的方法
    get X() {
        return this.element.offsetLeft
    }
    get Y() {
        return this.element.offsetTop
    }
    coordinateChange() {
        let x = Math.ceil(Math.random() * 29) * 10
        let y = Math.ceil(Math.random() * 29) * 10
        // console.log(x, y);
        this.element.style.left = `${x}px`
        this.element.style.top = `${y}px`
    }
}
// const food = new Food()
// console.log(food.X, food.Y);
// food.coordinateChange()
// food.coordinateChange()
// console.log(food);
// setInterval(food.coordinateChange, 1000)
export default Food