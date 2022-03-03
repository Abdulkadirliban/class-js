let students={
    id:777,
    name:"farah",
    age:23,
    tell:987654
}
console.log("display student info: "+students.id);
console.log("display student info: "+students[`name`]);
//---display all we use loop--
for(key in students){
    console.log(key+":"+students[key]);
}