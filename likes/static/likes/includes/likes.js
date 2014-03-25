if (typeof $ != 'undefined') {
    $(function() {

        $(document).on('click', 'a.liker', function(event) {
            event.preventDefault();
            $.get($(this).attr('href'), {}, function(data){
                location.reload();
            });
        });

        $(document).on('click', 'a.unliker', function(event) {
            event.preventDefault();
            $.get($(this).attr('href'), {}, function(data) {
                location.reload();
            });
        });
    });
}
