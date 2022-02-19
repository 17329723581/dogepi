(function() {
    $("#dowebok").fullpage({
        css3: true,
        sectionsColor: [
            // "#10101C",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
        ],
        navigation: true,
        anchors: [
            "index",
            "overview",
            "vision",
            "tokenomics",
            "roadmap",
            "team",
            "contactUs",
        ],
        menu: ".menu3",
        onLeave: function(index, nextIndex, direction) {
            $(".box1").css("display", "none");
            $(".box2").css("display", "none");
            $(".box3").css("display", "none");
            $(".box4").css("display", "none");
            $(".box5").css("display", "none");
            $(".box6").css("display", "none");
            $(".box7").css("display", "none");
            $(".box7-footer").css("display", "none");
            $(".box1-btn-token").css("display", "none");
        },
        afterLoad: function(anchorLink, index) {
            if (index == 1) {
                $(".box1").css("display", "flex");
                $(".box1-btn-token").css("display", "block");
            }
            if (index == 2) {
                $(".box2").css("display", "flex");
            }
            if (index == 3) {
                $(".box3").css("display", "flex");
            }
            if (index == 4) {
                $(".box4").css("display", "flex");
            }
            if (index == 5) {
                $(".box5").css("display", "flex");
            }
            if (index == 6) {
                $(".box6").css("display", "flex");
            }
            if (index == 7) {
                $(".box7").css("display", "flex");
                $(".box7-footer").css("display", "block");
            }
        },
    });

    window.onload = () => {
        const hash = window.location.hash.split("#")[1];
        const href = window.location.href.split("#")[0];
        if (hash && hash !== "index") {
            //location.href = href;
        }
        setTimeout(() => {
            const start = document.querySelector(".start");
            const container = document.querySelector(".h-container");
            start.className = "start s-start";
            $(".box1-btn-token").css("display", "none");
            setTimeout(() => {
                start.className = "h-start";
                container.className = "container";
                $(".box1-btn-token").css("display", "block");
            }, 1000);
        }, 2000);
        const height = document.body.clientHeight;
        $(".section").css("height", height);
        $(".fp-tableCell").css("height", height);

        $(".box2 .past .item").hover(
            function() {
                const index = $(this).attr("data");
                $(".box2 .past .item").removeClass("box2-active");
                $(this).addClass("box2-active");
                $(".box2 .local").css("display", "none");
                $(".box2 .local").removeClass("box2-local-init");
                $(`.box2 .local${index}`).css("display", "block");
                $(".box2 .item .origin-text .text").css("display", "none");
                $(`.box2 .item .origin-text .text${index}`).css("display", "block");
            },
            function() {
                const index = $(this).attr("data");
                $(this).removeClass("box2-active");
                $(".box2 .local").css("display", "none");
                $(`.box2 .item .origin-text .text${index}`).css("display", "none");
            }
        );
        $(".box5 .origin .originItem").hover(
            function() {
                const index = $(this).attr("data");
                $(".box5 .originItem").removeClass("box5-active");
                $(this).addClass("box5-active");
                $(".box5 .local").removeClass("box5-local-init");
                $(".box5 .local").css("display", "none");
                $(`.box5 .local${index}`).css("display", "block");
            },
            function() {
                // $(this).removeClass("box5-active");
                // $(".box5 .local").css("display", "none");
            }
        );
        $(".box7-logo img").hover(
            function() {
                const index = $(this).attr("data");
                $(this).attr("src", `./img/t${index}h.png`);
            },
            function() {
                const index = $(this).attr("data");
                $(this).attr("src", `./img/t${index}.png`);
            }
        );

        $(".copyEmail").click(function() {
            var input = document.getElementById("copyInput");
            input.value = "skpsevice@gmail.com";
            input.select(); // 选中文本
            document.execCommand("copy"); // 执行浏览器复制命令
            alert("复制成功");
        });
    };
})();