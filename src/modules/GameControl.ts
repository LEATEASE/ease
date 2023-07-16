import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    //定义三个属性
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    //创建一个属性来存储蛇的移动方向
    direation: string = ''
    //判断游戏是否结束
    isGame: boolean = true
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        //创建对象，就自动调用初始化函数，也可以在后面在自己调用
        this.init()
    }
    //游戏初始化，调用后游戏开始
    init() {
        //绑定键盘按下事件
        //第一次调用的时候this是当前的document，第二次的时候就变了
        //通过bind把this改为现在的
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.move()
    }
    keydownHandler(event: KeyboardEvent) {
        // console.log(event.key);
        this.direation = event.key
    }
    //创建蛇移动的函数
    move() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direation) {
            // 向上
            case 'w':
            case 'ArrowUp':
                Y -= 10
                break
            //向下
            case 's':
            case 'ArrowDown':
                Y += 10
                break
            //向左
            case 'a':
            case 'ArrowLeft':
                X -= 10
                break
            //向右
            case 'd':
            case 'ArrowRight':
                X += 10
                break
        }
        //检查是否吃到食物
        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y

        } catch (error: any) {
            alert(error.message + '，游戏结束')
            this.isGame = false
            // this.init()
            // this.isGame = true
        }
        this.isGame && setTimeout(this.move.bind(this), 100 - (this.scorePanel.level - 1) * 10)

    }
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.coordinateChange()
            for (let i = 1; i < this.snake.bodies.length; i++) {
                { }
                if (this.food.X === (this.snake.bodies[i] as HTMLElement).offsetLeft
                    && this.food.Y === (this.snake.bodies[i] as HTMLElement).offsetTop) {
                    //重叠了，重新生成食物
                    this.food.coordinateChange()
                }
            }
            this.scorePanel.addScore()
            this.snake.addSnakeBody()
        }
    }
}
export default GameControl;