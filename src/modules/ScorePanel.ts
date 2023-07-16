class ScorePanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    //定义最高等级
    maxLevel: number
    //定义升级分数
    upScore: number
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.querySelector('#level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        //设置每十分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }

    }
}
export default ScorePanel;