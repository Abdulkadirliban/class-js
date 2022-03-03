class student{
    id=585
    name="Abdulkadir"
    age=23
    phone=617055631
    display(){
        console.log(`ID is: ${this.id} Name is: ${this.name} 
        Age is: ${this.age}`)
        // return `ID is: ${this.id} Name is: ${this.name} 
        // Age is: ${this.age}`
    }
}
// create object
const std = new student();
std.display();
//------------anotherway to create class---------
const studentinfo=class{
    constructor(){
        this.id=234
        this.name="Abdul"
        
    }
    getdata(){
        console.log(`id is: ${this.id} name is: ${this.name}`)
    }
}
const std2= new studentinfo();
std2.getdata();

//----------------------
const Rectangle=class{
    constructor(height,weight){
        this.height=height;
        this.weight=weight

    }
    Area(){
       return `Total of Area is ${this.height*this.weight}`
    }
}
console.log(new Rectangle(5,8).Area());