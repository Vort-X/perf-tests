var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "514",
        "ok": "514",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1174",
        "ok": "1174",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1198",
        "ok": "1198",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1383",
        "ok": "1383",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1518",
        "ok": "1518",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2023",
        "ok": "2023",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 22,
    "percentage": 44
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.5",
        "ok": "12.5",
        "ko": "-"
    }
},
contents: {
"req_get-products-in-a5262": {
        type: "REQUEST",
        name: "Get products in a specific category request",
path: "Get products in a specific category request",
pathFormatted: "req_get-products-in-a5262",
stats: {
    "name": "Get products in a specific category request",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "514",
        "ok": "514",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1174",
        "ok": "1174",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1198",
        "ok": "1198",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1383",
        "ok": "1383",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1518",
        "ok": "1518",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2023",
        "ok": "2023",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 22,
    "percentage": 44
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.5",
        "ok": "12.5",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
