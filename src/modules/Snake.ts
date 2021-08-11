// 定义贪吃蛇类
class Snake{
    // 表示蛇
    element: HTMLElement;
    // 表示蛇头的元素
    head: HTMLElement;
    // 表示蛇的身体
    bodys: HTMLCollection;
    constructor(){
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake>div") as HTMLElement;
        this.bodys = this.element.getElementsByTagName("div");
    }

    // 获取蛇头的坐标
    get x(){
        return this.head.offsetLeft;
    }
    get y(){
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set x(value){
        if(this.x === value){
            return
        }
        if(value < 0 || value > 290){
            throw new Error("蛇撞墙了，游戏结束");
        }
        // 判断是否水平反向移动
        if(this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft === value){
            if(value > this.x){
                value = this.x - 10;
            }else{
                value = this.x + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.left = value + "px";
        this.checkHeadBody();
    }
    set y(value){
        if(this.y === value){
            return
        }
        if(value < 0 || value > 290){
            throw new Error("蛇撞墙了，游戏结束");
        }
        // 判断是否垂直反向移动
        if(this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop === value){
            if(value > this.y){
                value = this.y - 10;
            }else{
                value = this.y + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.top = value + "px";
        this.checkHeadBody();
    }

    // 蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    // 蛇移动身体的方法
    moveBody(){
        // 遍历获取所有的身体
        for(let i = this.bodys.length - 1; i > 0; i--){
            // 获取前边身体的位置
            let x = (this.bodys[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodys[i - 1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodys[i] as HTMLElement).style.left = x + "px";
            (this.bodys[i] as HTMLElement).style.top = y + "px";

        }
    }

    // 检测是否碰到身体
    checkHeadBody(){
        for(let i = 1; i < this.bodys.length; i++){
            let bd = this.bodys[i] as HTMLElement;
            if(this.x === bd.offsetLeft && this.y === bd.offsetTop){
                // 此时说明头部坐标和身体坐标重复
                throw new Error("蛇撞到身体，游戏结束")
            }
        }
    }
}
export default Snake;