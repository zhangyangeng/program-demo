// 引入其他的类
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

// 游戏控制器，控制其他所有的类
class GameControl {
    // 定义三个属性
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    // 记录每次键盘按键
    direction: string = "";
    // 使用变量来判断是否存活
    isLive: boolean = true;

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();
        this.init();
    }

    // 游戏初始化方法，调用后游戏就开始
    init() {
        // 绑定键盘按下的事件
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }

    // 键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 检查用户是否按了正确的按键
        this.direction = event.key;
    }

    // 控制蛇移动
    run() {
        // 获取蛇现在的坐标
        let X = this.snake.x;
        let Y = this.snake.y;
        // 根据按键方向来修改坐标值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        
        

        // 调用checkEat()方法来进行判断是否吃到食物
        this.checkEat(X, Y);

        // 捕获异常，处理蛇撞墙的情况
        try{
            this.snake.x = X;
            this.snake.y = Y;
        }catch(e){
            alert(e.message);
            // 修改蛇存活的状态
            this.isLive = false;
            // 刷新页面
            location.reload();
        }
        
        // 开启定时器让蛇自动移动
        this.isLive && setTimeout(this.run.bind(this),300);
    }

    // 检查蛇是否吃到食物
    checkEat(x: number, y: number){
        if(x === this.food.x && y === this.food.y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}
export default GameControl;