var curUrl = $(location).attr("href");
var arr = /http:\/\/codeforces.com\/problemset\/problem\/(\d+)\/(\w)/.exec(curUrl);
var probSet = arr[1];
var probNo = arr[2];
var statusUrl = "http://codeforces.com/problemset/status/" + probSet +  "/problem/" + probNo;
var statusLinkElement = $("<a>").attr("href", statusUrl)
                                .text("Submission Status");

$("#sidebar").append(statusLinkElement);