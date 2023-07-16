class Snake {
    //获取蛇的容器
    element: HTMLElement
    //获取蛇头
    head: HTMLElement
    //获取蛇的身体
    bodies: HTMLCollection
    // //判断是否活着
    // isLive: boolean = true
    constructor() {
        this.element = document.querySelector('#snake')!
        this.head = document.querySelector('#snake>div')!
        this.bodies = this.element.getElementsByTagName('div')
    }
    //蛇头的坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    //设置蛇头的坐标
    set X(x: number) {
        if (this.X === x) {
            return
        }
        if (x < 0 || x > 290) {
            throw (new Error('撞墙了'))
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === x) {
            if (x > this.X) {
                //x>X,此时蛇正准备向右掉头
                x = this.X - 10
            } else {
                //x<X,此时蛇正准备向左掉头
                x = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = x + 'px'
        this.checkBody()
    }
    set Y(y: number) {
        if (this.Y === y) {
            return
        }
        if (y < 0 || y > 290) {
            throw (new Error('撞墙了'))
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === y) {
            if (y > this.Y) {
                //y>Y,此时蛇正准备向下掉头
                y = this.Y - 10
            } else {
                //y<Y,此时蛇正准备向上掉头
                y = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = y + 'px'
        this.checkBody()
    }

    //添加蛇的身体
    addSnakeBody() {
        //再div#snake结束标签前的添加一个元素
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
    //蛇的身体移动
    moveBody() {
        /*
        后面一节等于前面一节的位置
        第四节=第三节
        第三节=第二节
        第二节=第一节 
         */
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取前边身体的坐标
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    //检验身体是否撞墙
    checkBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            //获取前边身体的坐标
            let x = (this.bodies[i] as HTMLElement).offsetLeft;
            let y = (this.bodies[i] as HTMLElement).offsetTop;
            if (x === this.X && y === this.Y) {
                throw new Error('吃到自己身体')
            }
        }
    }
}
export default Snake