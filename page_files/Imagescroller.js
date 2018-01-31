    jQuery.fn.imageScroller = function(params) {
        var p = params || {
            frame: "sItem",
            num: "sItem_no",
            stop: 5000
        };
        var times;
		
        var jishi = function() {
            var B = $("#"+p.frame+" li:last");
            var C = $("#"+p.frame+" li:first");
            if (B.is(":visible")) {
                C.fadeIn(1500).addClass("in");
                B.hide();
				$("#"+p.num+" li").removeClass("cur");
                $("#"+p.num+" li").eq(0).addClass("cur");

            } else {
                $("#"+p.frame+" li:visible").addClass("in");
                var id = $("#"+p.frame+" li.in").next();
                id.fadeIn(1500);
                $("#"+p.num+" li").removeClass("cur");
                $("#"+p.num+" li").eq(parseInt(id.attr("sid"))).addClass("cur");
                $("#"+p.frame+" li.in").hide().removeClass("in");

            }
        }
        var autoPlay = function() {
            times = window.setInterval(jishi, p.stop);
        };
        var autoStop = function() {
            window.clearInterval(times);
        };
        $("#"+p.frame+" li:not(:first)").css("display", "none");
        /*var stemp = "";
        for (var i = 0; i < $("#"+p.frame+" li").length; i++) {
            stemp += "<li sid='" + i + "'><img src='images/qie_" + (i + 1) + ".gif' /></li>";
        }
        $("#"+p.num+"").html(stemp);*/
        $("#"+p.num+" li").eq(0).addClass("cur");
        autoPlay();
        $("#"+p.num+" li").mouseover(function() {
            autoStop();
            autoPlay();
            $("#"+p.frame+" li").hide();
            $("#"+p.frame+" li").eq($(this).attr("sid")).fadeIn(1500);
            $("#"+p.num+" li").removeClass("cur");
            $(this).addClass("cur");
        });

    };
