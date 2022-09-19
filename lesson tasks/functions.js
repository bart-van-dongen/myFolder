const person = {

    name: "bart",
    email: "bart-van-dongen@hotmail.com",
    printInfo(){
    console.log(this.name, this.email)
}
}

const personName = person.name
person.printInfo()