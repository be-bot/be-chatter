$('.chat[data-chat=ashley]').addClass('active-chat');
$('.person[data-chat=ashley]').addClass('active');


$('.left .person').mousedown(function(){
    if ($(this).hasClass('.active')) {
        return false;
    } else {
        var findChat = $(this).attr('data-chat');
        var personName = $(this).find('.name').text();
        $('.right .top .name').html(personName);
        $('.chat').removeClass('active-chat');
        $('.left .person').removeClass('active');
        $(this).addClass('active');
        $('.chat[data-chat = '+findChat+']').addClass('active-chat');

        //change img
        //  var iframe = document.getElementById('i-' +  $(this).attr('data-chat') );
        //  //var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        // //  innerDoc.getElementById('agent-avatar').source = $(this).attr('data-img')
        // var cssLink = document.createElement("link");
        // cssLink.href = "css/iframe.css"; 
        // cssLink.rel = "stylesheet"; 
        // cssLink.type = "text/css"; 
        // iframe.document.body.appendChild(cssLink);
        //iframe.appendChild( cssLink )
    }
});