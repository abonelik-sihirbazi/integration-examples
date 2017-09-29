
function ajaxGET(requestTextArea, requestUrl, responseTextArea) {
    var requestData = requestTextArea.val();
    console.log("requestData: " + requestData)
    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function (data) {
            console.log("response: " + data);
            responseTextArea.text(data);

            if (requestTextArea.attr("id") == "resetRequest") {
                $("#loggedInUser").text("");
            }
        },
        error: function (data, status, er) {
            console.log("error response: " + data + " status: " + status + " error:" + er);
        }
    });
}

function subscribe(serviceOfferingId, paymentCard, requestUrl, authorizationToken, successCallback, failureCallback) {
    var serviceInstance = {
        "serviceOffering": {"id": serviceOfferingId},
        "serviceUserId": "Cem bey"
    };

    var requestObject = {
        "serviceInstance": serviceInstance,
        "paymentCard": paymentCard
    };

    var requestData = JSON.stringify(requestObject);

    console.log("requestData: " + requestData);

    $.ajax({
        url: requestUrl,
        type: 'POST',
        dataType: 'json',
        data: requestData,
        contentType: 'application/json',
        mimeType: 'application/json',
        headers: {
            "Authorization": "Apikey " + authorizationToken
        }
    }).done(successCallback).fail(failureCallback);
}




