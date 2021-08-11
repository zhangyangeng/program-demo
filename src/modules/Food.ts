// 定义食物类Food
class Food{
    // 定义属性类表示食物对应的元素
    element: HTMLElement;
    constructor(){
        // 使用感叹后来表示不为空
        this.element = document.getElementById("food")!;
    }

    // 获取食物x轴坐标的方法
    get x(){
        return this.element.offsetLeft;
    }
    get y(){
        return this.element.offsetTop;
    }
    // 修改食物位置方法
    change(){
        // 食物大小为10px，且食物变化区间在0-290px之间
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        // 设置食物的位置
        this.element.style.top = top + "px";
        this.element.style.left = left + "px";
    }
}
export default Food;