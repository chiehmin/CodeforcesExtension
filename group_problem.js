var curUrl = $(location).attr("href");
var statusUrl = curUrl.replace("problem", "status");
var statusLinkElement = $("<a>").attr("href", statusUrl)
                                .text("Submission Status");

$("#sidebar").append(statusLinkElement);