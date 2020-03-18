module.exports.log = (message) => {
    console.log("[Log] " + getTime() + " " + message);
};

function getTime() {

    var date = new Date();

    var hour = date.getHours();

    var min  = date.getMinutes();

    var sec  = date.getSeconds();

    return hour + ":" + min + ":" + sec;

}