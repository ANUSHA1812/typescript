var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, noOfLikes, noOfSubscriber, duration, channelname, noOfDislikes) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.noOfLikes = noOfLikes;
        this.noOfSubscriber = noOfSubscriber;
        this.duration = duration;
        this.channelname = channelname;
        this.noOfDislikes = noOfDislikes;
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.getnoOfLikes = function () {
            return _this.noOfLikes;
        };
        this.getnoOfSubsciber = function () {
            return _this.noOfSubscriber;
        };
        this.getduration = function () {
            return _this.duration;
        };
        this.getchannelname = function () {
            return _this.channelname;
        };
        this.getnoOfDiskes = function () {
            return _this.noOfDislikes;
        };
        this.videoTitle = videoTitle;
        this.noOfLikes = noOfLikes;
        this.noOfSubscriber = noOfSubscriber;
        this.duration = duration;
        this.channelname = channelname;
        this.noOfDislikes = noOfDislikes;
    }
    return Youtube;
}());
var objname = new Youtube("Percentage", 1200, 1000, 23, "Aptitude", 2);
console.log("Title: ", objname.getvideoTitle());
console.log("No of Likes: ", objname.getnoOfLikes());
console.log("No of Subscriber: ", objname.getnoOfSubsciber());
console.log("Duration: ", objname.getduration());
console.log("Channel: ", objname.getchannelname());
console.log("No of Dislikes: ", objname.getnoOfDiskes());
