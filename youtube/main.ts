class Youtube{

    constructor(public videoTitle:string,public noOfLikes:number,public noOfSubscriber:number,public duration:number,public channelname:string,public noOfDislikes:number){
        this.videoTitle=videoTitle;
        this.noOfLikes=noOfLikes;
        this.noOfSubscriber=noOfSubscriber;
        this.duration=duration;
        this.channelname=channelname;
        this.noOfDislikes=noOfDislikes;

    }
    getvideoTitle=()=>
    {
        return this.videoTitle;

    }
    getnoOfLikes=()=>
    {
        return this.noOfLikes;
    }
    getnoOfSubsciber=()=>
    {
        return this.noOfSubscriber;

    }
    getduration=()=>
    {
        return this.duration;
    }

    getchannelname=()=>
    {
        return this.channelname;

    }
    getnoOfDiskes=()=>
    {
        return this.noOfDislikes;
    }


}
let objname =new Youtube("Percentage",1200,1000,23,"Aptitude",2);
console.log("Title: ", objname.getvideoTitle());
console.log("No of Likes: " ,objname.getnoOfLikes());
console.log("No of Subscriber: " ,objname.getnoOfSubsciber());
console.log("Duration: ", objname.getduration());
console.log("Channel: ", objname.getchannelname());
console.log("No of Dislikes: ", objname.getnoOfDiskes());