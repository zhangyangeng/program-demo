// 定义记分牌类ScorePanel
class ScorePanel{
    score: number = 0;
    level: number = 1;
    scoreELe: HTMLElement;
    levelEle: HTMLElement;
    // 定义最高级别
    maxLevel: number;
    // 定义升级标准
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10){
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreELe = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
    }
    // 设置加分方法
    addScore(){
        this.score ++;
        this.scoreELe.innerHTML = this.score + "";
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }
    // 设置提升等级方法
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
}
export default ScorePanel;