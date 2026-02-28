/*-------------------------- Top Search and Cart -----------------------*/
jQuery("#site-search a").click(function(e) {
    jQuery('.search-form').addClass('top-search-open');
    e.stopPropagation();
    e.preventDefault();
});
jQuery(".fa-close").click(function(e) {
    jQuery('.search-form').removeClass('top-search-open');
    e.stopPropagation();
    e.preventDefault();
});

/**  fixed menu.
--------------------------------------------------------------------------------------------------- */
var firstMenuHeight = 200;
var secondMenuHeight = 260;

jQuery(window).bind('scroll', function() {
    "use strict";
    if (jQuery(window).scrollTop() > firstMenuHeight) {
        jQuery('#peace-menu').addClass('fixed-on-top');
    } else {
        jQuery('#peace-menu').removeClass('fixed-on-top');
    }

    if (jQuery(window).scrollTop() > secondMenuHeight) {
        jQuery('#peace-menu').addClass('fix-menu');
    } else {
        jQuery('#peace-menu').removeClass('fix-menu');
    }

});


/**  circular countdown.
--------------------------------------------------------------------------------------------------- */
function JBCountDown(settings) {
    "use strict";
    var glob = settings;

    function deg(deg) {
        return (Math.PI / 180) * deg - (Math.PI / 180) * 90;
    }

    glob.total = Math.floor((glob.endDate - glob.startDate) / 86400);
    glob.days = Math.floor((glob.endDate - glob.now) / 86400);
    glob.hours = 24 - Math.floor(((glob.endDate - glob.now) % 86400) / 3600);
    glob.minutes = 60 - Math.floor((((glob.endDate - glob.now) % 86400) % 3600) / 60);
    glob.seconds = 60 - Math.floor((glob.endDate - glob.now) % 86400 % 3600 % 60);

    if (glob.now >= glob.endDate) {
        return;
    }

    var clock = {
        set: {
            days: function() {
                var cdays = jQuery(".canvas_days").get(0);
                var ctx = cdays.getContext("2d");
                ctx.clearRect(0, 0, cdays.width, cdays.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.daysColor;

                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = glob.daysGlow;

                ctx.arc(54.5, 54.5, 52.5, deg(0), deg(360 / glob.total * (glob.total - glob.days)));
                ctx.lineWidth = 4;
                ctx.stroke();
                jQuery(".clock_days .val").text(glob.days);
            },

            hours: function() {
                var cHr = jQuery(".canvas_hours").get(0);
                var ctx = cHr.getContext("2d");
                ctx.clearRect(0, 0, cHr.width, cHr.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.hoursColor;

                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = glob.hoursGlow;

                ctx.arc(54.5, 54.5, 52.5, deg(0), deg(15 * glob.hours));
                ctx.lineWidth = 4;
                ctx.stroke();
                jQuery(".clock_hours .val").text(24 - glob.hours);
            },

            minutes: function() {
                var cMin = jQuery(".canvas_minutes").get(0);
                var ctx = cMin.getContext("2d");
                ctx.clearRect(0, 0, cMin.width, cMin.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.minutesColor;

                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = glob.minutesGlow;

                ctx.arc(54.5, 54.5, 52.5, deg(0), deg(6 * glob.minutes));
                ctx.lineWidth = 4;
                ctx.stroke();
                jQuery(".clock_minutes .val").text(60 - glob.minutes);
            },
            seconds: function() {
                var cSec = jQuery(".canvas_seconds").get(0);
                var ctx = cSec.getContext("2d");
                ctx.clearRect(0, 0, cSec.width, cSec.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.secondsColor;

                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = glob.secondsGlow;

                ctx.arc(54.5, 54.5, 52.5, deg(0), deg(6 * glob.seconds));
                ctx.lineWidth = 4;
                ctx.stroke();

                jQuery(".clock_seconds .val").text(60 - glob.seconds);
            }
        },

        start: function() {
            /* Seconds */
            var cdown = setInterval(function() {
                if (glob.seconds > 59) {
                    if (60 - glob.minutes === 0 && 24 - glob.hours === 0 && glob.days === 0) {
                        clearInterval(cdown);

                        /* Countdown is complete */

                        return;
                    }
                    glob.seconds = 1;
                    if (glob.minutes > 59) {
                        glob.minutes = 1;
                        clock.set.minutes();
                        if (glob.hours > 23) {
                            glob.hours = 1;
                            if (glob.days > 0) {
                                glob.days--;
                                clock.set.days();
                            }
                        } else {
                            glob.hours++;
                        }
                        clock.set.hours();
                    } else {
                        glob.minutes++;
                    }
                    clock.set.minutes();
                } else {
                    glob.seconds++;
                }
                clock.set.seconds();
            }, 1000);
        }
    };
    clock.set.seconds();
    clock.set.minutes();
    clock.set.hours();
    clock.set.days();
    clock.start();
}




/**  boxer.
--------------------------------------------------------------------------------------------------- */
jQuery(".boxer").lightbox();


/**  preloader.
--------------------------------------------------------------------------------------------------- */
// Site Preloader
jQuery(window).load(function() {
    jQuery(".loader").fadeOut();
    jQuery("#preloader").delay(350).fadeOut("slow");
});


// scrollReveal Init
if (screen.width > 966) {
    jQuery(document).ready(function() {
        new WOW().init();
    });
}


/**  circular countdown.
--------------------------------------------------------------------------------------------------- */
var findClass = jQuery('.next-event');

if (findClass.length) {

    jQuery(document).ready(function() {
        "use strict";

        JBCountDown({
            secondsColor: "#f1c152",
            secondsGlow: "none",

            minutesColor: "#f1c152",
            minutesGlow: "none",

            hoursColor: "#f1c152",
            hoursGlow: "none",

            daysColor: "#f1c152",
            daysGlow: "none",

            // startDate   : "1443657600",
            endDate: "1445385600",
            now: "1444200921"
        });
    });

}



/*-------------------------- Isotope Init --------------------*/
jQuery(window).on("load resize", function(e) {

    var $container = jQuery('.isotope-items'),
        colWidth = function() {
            var w = $container.width(),
                columnNum = 1,
                columnWidth = 0;
            if (w > 1040) {
                columnNum = 5;
            } else if (w > 850) {
                columnNum = 2;
            } else if (w > 768) {
                columnNum = 2;
            } else if (w > 480) {
                columnNum = 2;
            }
            columnWidth = Math.floor(w / columnNum);

            //Isotop Version 1
            var $containerV1 = jQuery('.isotope-items');
            $containerV1.find('.item').each(function() {
                var $item = jQuery(this),
                    multiplier_w = $item.attr('class').match(/item-w(\d)/),
                    multiplier_h = $item.attr('class').match(/item-h(\d)/),
                    width = multiplier_w ? columnWidth * multiplier_w[1] - 10 : columnWidth,
                    height = multiplier_h ? columnWidth * multiplier_h[1] * 0.7 : columnWidth * 0.7;
                $item.css({
                    width: width,
                    height: height,
                });
            });


            return columnWidth;
        },
        isotope = function() {
            $container.isotope({
                resizable: true,
                itemSelector: '.item',
                masonry: {
                    columnWidth: colWidth(),
                    gutterWidth: 10
                }
            });
        };
    isotope();



    // bind filter button click
    jQuery('.isotope-filters').on('click', 'button', function() {
        var filterValue = jQuery(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });

    // change active class on buttons
    jQuery('.isotope-filters').each(function(i, buttonGroup) {
        var $buttonGroup = jQuery(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.active').removeClass('active');
            jQuery(this).addClass('active');
        });
    });


    // Masonry Isotope
    var $masonryIsotope = jQuery('.isotope-masonry-items').isotope({
        itemSelector: '.item',
    });

    // bind filter button click
    jQuery('.isotope-filters').on('click', 'button', function() {
        var filterValue = jQuery(this).attr('data-filter');
        $masonryIsotope.isotope({
            filter: filterValue
        });
    });

    // change active class on buttons
    jQuery('.isotope-filters').each(function(i, buttonGroup) {
        var $buttonGroup = jQuery(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.active').removeClass('active');
            jQuery(this).addClass('active');
        });
    });
});


/*------------------------------------------------------------------------------------------------------------------*/
/* clock counter 
/*------------------------------------------------------------------------------------------------------------------*/


jQuery(document).ready(function() {

    jQuery('.clock_counter').each(function() {
        //22
        var time = jQuery(this).data('time');
        var date = jQuery(this).data('date');
        var i = jQuery(this);
        var init = othermakeCounter(time, date, i);
    });

    function othermakeCounter(time, date, i) {

        var nextDay = "2015/10/8 ";
        if (date > nextDay) {
            greeting = date;
        } else {
            greeting = nextDay;
        }


        var currentTime = greeting + time;
        jQuery(i).countdown(currentTime, function(event) {
            var $this = jQuery(this).html(event.strftime('' + '<div class="hour col-xs-6"><h3>%d</h3> <span>Day</span></div>' + '<div class="hour min col-xs-6"><h3>%H</h3> <span>Hours</span></div>'));
        }).on('finish.countdown', othermakeCounter);
    }


});


/*------------------------------------------------------------------------------------------------------------------*/
/* google map 
/*------------------------------------------------------------------------------------------------------------------*/

jQuery(document).ready(function() {

    "use strict";

    /*----------- Google Map - with support of gmaps.js ----------------*/
    function isMobile() {
        return ('ontouchstart' in document.documentElement);
    }

    function init_gmap() {
        if (typeof google == 'undefined') return;
        var options = {
            center: [23.739393, 90.389195],
            zoom: 15,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            navigationControl: true,
            scrollwheel: false,
            streetViewControl: true
        }

        if (isMobile()) {
            options.draggable = false;
        }

        jQuery('.googleMaps').gmap3({
            map: {
                options: options
            },
            marker: {
                latLng: [23.739393, 90.389195],
                options: {
                    icon: "images/09/map-icon.png"
                }
            }
        });
    }

    init_gmap();


});