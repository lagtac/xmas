$(function () {
    Pace.on("done", function () {
        $("#myloader").fadeOut(800);
    });


    let audio = $('#audio-status');
    let muteLine = $('#mute-line');

    audio.on('click', function (event) {
        audio.toggleClass('muted');
        if (player) {
            if (player.isMuted()) {
                player.unMute();

            } else {
                player.mute();
            }
        }
    });

    let main = $('.main');
    let cardcover = $('.cardcover');
    let cardfly = $('.cardfly');
    let cardlet = $('.cardlet');
    let card = $('.card');

    //let cardFlyHeight = parseInt(cardfly.css('height')) + 500;
    let cardFlyHeight = 2000;

    main.css('height', cardFlyHeight);
    //console.log(cardfly.css('height'));

    cardletsArray = [];
    cardlet.each(function (idx, el) {
        //console.log(el);
        cardletsArray.push($(el));
    });

    // init cardlets
    let angles = [];
    cardletsArray.forEach(function (el, idx) {
        // let q = Math.random() * 10;
        // angles.push(q);
        // el.css('transform', 'rotate(' + q + 'deg)');
        let n = 'c' + ((idx + 1) * 10).toString();
        el.addClass(n);

        cardletsArray.forEach(function (el, idx) {

            // Add some random delay
            el.css('transition-delay', Math.random().toString() + 's');

            let n = 'c' + ((idx + 1) * 10).toString() + '-i';
            el.addClass(n);
        }, this);
    }, this);


    card.on('click', function (e) {
        if (cardcover.hasClass('cardcover__opened')) {
            cardletsArray.forEach(function (el, idx) {
                let n = 'c' + ((idx + 1) * 10).toString();
                el.toggleClass(n);
            });
            cardcover.removeClass('cardcover__opened');
        } else {
            cardletsArray.forEach(function (el, idx) {
                let n = 'c' + ((idx + 1) * 10).toString();
                //setTimeout(console.log(n), 1000);
                el.toggleClass(n);
            });
            cardcover.addClass('cardcover__opened');
        }
    });


    // cardcover.on('transitionend', function (event) {
    //     cardletsArray.forEach(function (el, idx) {
    //         let q = angles[idx];
    //         el.css('transform', 'rotate(' + '0' + 'deg)');
    //     }, this);
    //     console.log(event)
    // });
});
