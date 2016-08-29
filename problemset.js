var curUrl = $(location).attr("href");
var arr = /http:\/\/(www.)?codeforces.com\/problemset\/problem\/(\d+)\/(\w)/.exec(curUrl);
var probSet = arr[2];
var probNo = arr[3];
var statusUrl = "http://codeforces.com/problemset/status/" + probSet +  "/problem/" + probNo;
var statusLinkElement = $("<a>").attr("href", statusUrl)
                                .text("Submission Status");

$("#sidebar").append(statusLinkElement);