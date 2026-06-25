$(function() {
// -------------------------------------------------
// main
// -------------------------------------------------

    var menu_bar = new MenuBar(1);

    //お問い合わせ先情報取得
    var req_obj = {
        url  : samuraiBase+'ws/' + country + '/publishers/contacts',
        type : 'GET',
        data : {'lang':lang}
    };

    //ajax
    $.getXml(req_obj)
        .done(
        function(xml){
            var primary_contacts = $(xml).find('primary_contact').text().split('\n\n');
            for(var i=0; i<primary_contacts.length; i++){
                var html = '<li>'+primary_contacts[i].replace(/\n/g,'<br />\n')+'</li>';
                $(html).appendTo($('#sel_primary_contact'));
            }
            $(xml).find('contact').each(function(){
                var publisher_name = $(this).children('publisher').find('name').text();
                var publisher_id = $(this).children('publisher').attr('id');
                var id_contact = 'sel_contact_' + publisher_id;
                $('#template_contact').tmpl({
                    'publisher_name' : publisher_name,
                    'id_contact' : id_contact
                }).appendTo('#sel_contacts');

                var name = $(this).children('name').text();
                if(name!==null && name!==''){
                    name = '<li>' + name.replace(/\n/g,'<br />\n') + '</li>';
                }
                $(name).appendTo('#'+id_contact);
                var phone_number = $(this).children('phone_number').text();
                if(phone_number!==null && phone_number!==''){
                    phone_number = '<li>' + phone_number.replace(/\n/g,'<br />\n') + '</li>';
                    $(phone_number).appendTo('#'+id_contact);
                }
                var url = $(this).children('url').text();
                if(url!==null && url!==''){
                    url = '<li>' + url.replace(/\n/g,'<br />\n') + '</li>';
                    $(url).appendTo('#'+id_contact);
                }
                var email = $(this).children('email').text();
                if(email!==null && email!==''){
                    email = '<li>' + email.replace(/\n/g,'<br />\n') + '</li>';
                    $(email).appendTo('#'+id_contact);
                }
            });
        }
        )
        .fail(
        function(xml){
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            setErrorHandler(prefixSamurai, error_code, error_msg, function(){});
        }
    );

// -------------------------------------------------
// event
// -------------------------------------------------

});

// -------------------------------------------------
// functions
// -------------------------------------------------

//history.back時の処理
window.onpageshow = function(e) {
    if (e.persisted) {
        $('#sel_menu_bar .on').removeClass('on'); // SEE #11973
    }
    getBalance();
    //BGM
    setBGM('setting');
};
