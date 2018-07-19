class Fb{
    constructor(public firstName:string,public lastName:string,public email: any,public birthday:any,public gender?:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.birthday=birthday;
        this.gender=gender;
    }
}
class info extends Fb{

    constructor(public firstName:string,public lastName:string,public email: any,public birthday:any,public gender?:string){
        super(firstName,lastName,email,birthday,gender);
    }
  getFirstName=()=>
    {
        return this.firstName;
    }
    getLasttName=()=>
    {
        return this.lastName;
    }
    getemail=()=>
    {
        return this.email;
    }
    getbirthday=()=>
    {
        return this.birthday;
    }
    getgender=()=>
    {
        return this.gender;
    }
}  

let obj= new info("Anusha","Sharma","anushasharma234@gmail.com","12-2-12");
console.log("Firstname is:",obj.getFirstName());
console.log("Lastname is:",obj.getLasttName());
console.log("Email is:",obj.getemail());
console.log("Birthday is:",obj.getbirthday());