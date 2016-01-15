var twBtn = $('.js-twitter');
twBtn.on('click', function () {
    $.post('https://api.twitter.com/oauth/request_token', {
        oauth_callback: 'https://socialcolander.github.io/'
    }, function (data) {
        console.log('data', data);
    });
});
