function delay(o) {
    return o = o || 2e3, new Promise(a => {
        setTimeout(() => {
            a()
        }, o)
    })
}

function clickVista() {
    $(".link-vista").off().on("click", function() {
        $(this).css("pointer-events", "none");
        var o = $(this).data("titulo"),
            a = $(this).data("parrafo"),
            t = $(this).data("imgmac"),
            e = $(this).data("tech"),
            i = $(this).data("url");
        $(".vista .descripcion-web h2").text(o), $(".vista .descripcion-web p").html(a), $(".vista .img-web-child img").attr("src", t), $(".vista .descripcion-web .tech").html(e), $(".vista .descripcion-web .btn-one").attr("href", i), gsap.to(".contenido-vista", {
            ease: "expo.inOut",
            opacity: 1,
            width: "100%"
        }), gsap.to(".vista", {
            duration: .8,
            width: "100%",
            x: "0%",
            ease: "expo.inOut",
            display: "block"
        }), gsap.from(".vista h2", {
            duration: .8,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .3
        }), gsap.from(".vista .descripcion-web p", {
            duration: .8,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .4
        }), gsap.from(".vista .descripcion-web .tech", {
            duration: .8,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .5
        }), gsap.from(".vista .descripcion-web .btn-one", {
            duration: .5,
            opacity: 0,
            ease: "none",
            y: 30,
            delay: .4
        }), gsap.from(".vista .img-web-child img", {
            duration: .8,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .4
        })
    })
}

function cerrarVista() {
    $(".cerrar-vista").on("click", function() {
        $(".link-vista").css("pointer-events", "auto"), gsap.to(".vista h2", {
            duration: .5,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .3
        }), gsap.to(".vista .img-web-child img", {
            duration: .5,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .5
        }), gsap.to(".vista .descripcion-web p", {
            duration: .5,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .3
        }), gsap.to(".vista .descripcion-web .tech", {
            duration: .5,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .4
        }), gsap.to(".vista .descripcion-web .btn-one", {
            duration: .5,
            opacity: 0,
            ease: "expo.inOut",
            y: 30,
            stagger: .4,
            delay: .5
        }), gsap.to(".vista", {
            duration: .8,
            width: "100%",
            x: "-100%",
            ease: "expo.inOut",
            display: "none",
            delay: 1
        }), gsap.to(".vista h2", {
            clearProps: "all",
            delay: 1
        }), gsap.to(".vista .img-web-child img", {
            clearProps: "all",
            delay: 1
        }), gsap.to(".vista .descripcion-web p", {
            clearProps: "all",
            delay: 1
        }), gsap.to(".vista .descripcion-web .tech", {
            clearProps: "all",
            delay: 1
        }), gsap.to(".vista .descripcion-web .btn-one", {
            clearProps: "all",
            delay: 1
        })
    })
}

function bodyWhite() {
    window.onscroll = function(o) {
        console.log("scroll: " + window.scrollY), window.scrollY >= 110 ? $(".container-sobremi").parents("body").addClass("blanco") : window.scrollY < 110 && $("body").hasClass("blanco") && $("body").removeClass("blanco")
    }
}
window.addEventListener("load", function() {
    setTimeout(function() {
        $(".loader").addClass("fin");
        gsap.to(".fin", {
            duration: .8,
            x: "100%",
            ease: "expo.inOut"
        })
    }, 1e3)
});
var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

function bodydata() {
    var o = window.location.pathname;
    $("body").attr("data-url", o), -1 != $("body").attr("data-url").indexOf("index.html") ? $("body").addClass("over") : $("body").removeClass("over")
}

function hoverMouse() {
    $(document).on("mousemove", function(o) {
        mouseX = o.pageX, mouseY = o.pageY
    }), $(".link-vista, .btn-one, .box-laboral a, .menu a.menu-item, .menu .menu-open-button").on("mouseenter", function() {
        cursor.addClass("active"), follower.addClass("active")
    }), $(".link-vista, .btn-one, .box-laboral a, .menu a.menu-item, .menu .menu-open-button").on("mouseleave", function() {
        cursor.removeClass("active"), follower.removeClass("active")
    })
}

function contentAnimation() {
    gsap.timeline().from(".p-animado", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: .4,
        delay: .8
    }), gsap.from(".titulo", {
        duration: 1,
        y: -30,
        opacity: 0,
        stagger: .4,
        delay: .3
    }), gsap.from(".titulo-2", {
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: .4,
        delay: .5
    }), gsap.from(".btn-proyectos", {
        duration: .5,
        y: 20,
        opacity: 0,
        delay: .9
    }), gsap.from(".btn-sobre-mi", {
        duration: .5,
        y: 20,
        opacity: 0,
        delay: 1.2
    }), gsap.from(".titulo-proyectos", {
        duration: 1,
        y: -30,
        opacity: 0,
        stagger: .4,
        delay: .3
    }), gsap.from(".content-menu1", {
        duration: .5,
        x: -30,
        opacity: 0,
        stagger: .4,
        delay: .1
    })
}

function ocultar() {
    gsap.to(".titulo", {
        opacity: 0,
        y: -30
    }), gsap.to(".titulo-2", {
        opacity: 0,
        y: -30
    }), gsap.to(".p-animado", {
        y: 30,
        opacity: 0
    }), gsap.to(".titulo-proyectos", {
        opacity: 0,
        y: -30
    }), gsap.to(".link-vista", {
        opacity: 0,
        y: -40
    }), gsap.to(".content-menu1", {
        opacity: 0,
        x: -30
    })
}

function pageTransition() {
    var o = gsap.timeline();
    o.to(".loading-screen", {
        duration: .8,
        height: "100%",
        bottom: "0%",
        ease: "expo.inOut"
    }), o.to(".loading-screen", {
        duration: .6,
        height: "100%",
        bottom: "100%",
        ease: "expo.inOut",
        delay: .3
    }), o.set(".loading-screen", {
        bottom: "-100%"
    })
}
gsap.to({}, .016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9, posY += (mouseY - posY) / 9, gsap.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        }), gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
}), window.addEventListener("load", function() {
    setTimeout(function() {
        $(function() {
            barba.init({
                sync: !0,
                transitions: [{
                    async beforeLeave(o) {
                        const a = this.async();
                        ocultar(), a()
                    },
                    async leave(o) {
                        const a = this.async();
                        pageTransition(), await delay(500), a()
                    },
                    async enter(o) {
                        contentAnimation(), clickVista(), cerrarVista(), hoverMouse(), bodyWhite(), bodydata()
                    },
                    async once(o) {
                        contentAnimation(), clickVista(), cerrarVista(), hoverMouse(), bodyWhite(), bodydata()
                    }
                }]
            })
        })
    }, 1e3)
});
