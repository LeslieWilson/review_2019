// your code, here
class Rectangle{
    constructor(width, height){
        this.width = width;

        if(height){
            this.height = height;

        }else{
            this.height = width;
        }
    }


area(){
    return this.width * this.height
}
}
let firstrec= new Rectangle(5)
console.log(firstrec.area())
