export class hotel{
    id!:string;
    name!:string;
    location!:string;
    isAvailable!:boolean;
    checkInDate?:Date;
    checkOutDate?:Date;
    constructor(name:string,id:string,location:string){
        console.log("in hotel")
        this.name=name;
        this.id=id;
        this.location=location;
        this.isAvailable=true;
    }
}
