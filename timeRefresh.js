exports.timeRefresh=function(){
    const current = new Date();
const options={
    hour:"2-digit",
    minute:"2-digit",
    hour12:false
};

    const time= current.toLocaleTimeString("en-US",options);
    return time;
}