var twBtn = $('.js-twitter');
twBtn.on('click', function () {
    $.post('https://api.twitter.com/oauth/request_token', {
        oauth_callback: 'https://socialcolander.github.io/'
    }, function (data) {
        console.log('data', data);
    });
});


$.ajax({
    url: "https://api.twitter.com/oauth/request_token",
    data: {
        oauth_callback: 'https://socialcolander.github.io/'
    },
    type: "POST",
    beforeSend: function(xhr){
        xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
        xhr.setRequestHeader('OAuth oauth_nonce', "K7ny27JTpKVsTgdyLdDfmQQWVLERj2zAK5BslRsqyw");
        xhr.setRequestHeader('oauth_callback', "http%3A%2F%2Fmyapp.com%3A3005%2Ftwitter%2Fprocess_callback");
        xhr.setRequestHeader('oauth_signature_method', "HMAC-SHA1");
        xhr.setRequestHeader('oauth_timestamp', "1300228849");
        xhr.setRequestHeader('oauth_consumer_key', "OqEqJeafRSF11jBMStrZz");
        xhr.setRequestHeader('oauth_signature', "Pc%2BMLdv028fxCErFyi8KXFM%2BddU%3D");
        xhr.setRequestHeader('oauth_version', "1.0");
    },
    success: function() { alert('Success!' + authHeader); }
});
