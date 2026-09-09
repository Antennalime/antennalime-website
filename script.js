/* =========================================
   ANTENNA LIME
   MAIN JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("page-loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 700);

});


/* =========================================
   MOBILE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.getElementById("mobile-menu-button");

    const mobileNavigation =
        document.getElementById("mobile-navigation");

    if (!menuButton || !mobileNavigation) return;


    menuButton.addEventListener("click", () => {

        mobileNavigation.classList.toggle("open");

    });


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("open");

        });

    });

});


/* =========================================
   COPY CONTRACT ADDRESS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const copyButton =
        document.getElementById("copy-contract");

    const contractAddress =
        document.getElementById("contract-address");

    const copyMessage =
        document.getElementById("copy-message");


    if (
        !copyButton ||
        !contractAddress
    ) {
        return;
    }


    copyButton.addEventListener("click", async () => {

        const address =
            contractAddress.textContent.trim();


        try {

            await navigator.clipboard.writeText(address);

            if (copyMessage) {

                copyMessage.classList.add("show");

                setTimeout(() => {

                    copyMessage.classList.remove("show");

                }, 2200);

            }


            const buttonText =
                copyButton.querySelector("span");


            if (buttonText) {

                const originalText =
                    buttonText.textContent;

                buttonText.textContent = "Copied!";


                setTimeout(() => {

                    buttonText.textContent =
                        originalText;

                }, 1800);

            }

        } catch (error) {

            /* Fallback for older mobile browsers */

            const textarea =
                document.createElement("textarea");

            textarea.value = address;

            textarea.style.position = "fixed";

            textarea.style.opacity = "0";

            document.body.appendChild(textarea);

            textarea.focus();

            textarea.select();

            document.execCommand("copy");

            textarea.remove();


            if (copyMessage) {

                copyMessage.classList.add("show");

                setTimeout(() => {

                    copyMessage.classList.remove("show");

                }, 2200);

            }

        }

    });

});


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const links =
        document.querySelectorAll('a[href^="#"]');


    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".site-header");


    if (!header) return;


    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   CREATE FLOATING PARTICLES
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const particleContainer =
        document.getElementById("particles");


    if (!particleContainer) return;


    const particleCount =
        window.innerWidth < 700 ? 25 : 50;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.className =
            "floating-particle";


        const size =
            Math.random() * 3 + 1;


        const left =
            Math.random() * 100;


        const duration =
            Math.random() * 12 + 8;


        const delay =
            Math.random() * 10;


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${left}%`;

        particle.style.animationDuration =
            `${duration}s`;

        particle.style.animationDelay =
            `${delay}s`;


        particleContainer.appendChild(
            particle
        );

    }

});


/* =========================================
   ADD PARTICLE ANIMATION
========================================= */

const particleStyle =
    document.createElement("style");


particleStyle.textContent = `

    #particles {

        position: fixed;

        inset: 0;

        z-index: -3;

        pointer-events: none;

        overflow: hidden;

    }


    .floating-particle {

        position: absolute;

        bottom: -10px;

        border-radius: 50%;

        background: rgba(183,255,42,0.7);

        box-shadow:
            0 0 8px rgba(183,255,42,0.5);

        animation:
            particleRise linear infinite;

    }


    @keyframes particleRise {

        0% {

            transform:
                translateY(0)
                translateX(0);

            opacity: 0;

        }


        10% {

            opacity: 0.8;

        }


        50% {

            transform:
                translateY(-50vh)
                translateX(25px);

        }


        100% {

            transform:
                translateY(-110vh)
                translateX(-25px);

            opacity: 0;

        }

    }


    .site-header.scrolled .navbar {

        background:
            rgba(3,5,13,0.92);

        border-color:
            rgba(183,255,42,0.15);

    }

`;


document.head.appendChild(
    particleStyle
);


/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const buttons =
        document.querySelectorAll(
            ".primary-button, .secondary-button, .nav-buy"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");


                ripple.className =
                    "button-ripple";


                const rect =
                    this.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;


                ripple.style.left =
                    `${event.clientX - rect.left - size / 2}px`;

                ripple.style.top =
                    `${event.clientY - rect.top - size / 2}px`;


                this.appendChild(ripple);


                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });


    const rippleStyle =
        document.createElement("style");


    rippleStyle.textContent = `

        .primary-button,
        .secondary-button,
        .nav-buy {

            position: relative;

            overflow: hidden;

        }


        .button-ripple {

            position: absolute;

            border-radius: 50%;

            background:
                rgba(255,255,255,0.25);

            transform: scale(0);

            animation:
                rippleAnimation 0.6s ease-out;

            pointer-events: none;

        }


        @keyframes rippleAnimation {

            to {

                transform: scale(2);

                opacity: 0;

            }

        }

    `;


    document.head.appendChild(
        rippleStyle
    );

});


/* =========================================
   INTERSECTION ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const elements =
        document.querySelectorAll(
            ".about-card, .stat-item, .section-heading, .cta-container"
        );


    if (!("IntersectionObserver" in window)) {

        elements.forEach((element) => {

            element.classList.add("visible");

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach((element) => {

        element.classList.add(
            "reveal-element"
        );

        observer.observe(element);

    });


    const revealStyle =
        document.createElement("style");


    revealStyle.textContent = `

        .reveal-element {

            opacity: 0;

            transform:
                translateY(25px);

            transition:
                opacity 0.7s ease,
                transform 0.7s ease;

        }


        .reveal-element.visible {

            opacity: 1;

            transform:
                translateY(0);

        }

    `;


    document.head.appendChild(
        revealStyle
    );

});


/* =========================================
   TOKEN CONSTANTS
========================================= */

const ANTENNA_LIME = {

    contract:
        "6kirCtZ2pBqStJFKLD9PhBjLqYZpmbeQNDuMnig6pump",

    pumpfun:
        "https://pump.fun/coin/6kirCtZ2pBqStJFKLD9PhBjLqYZpmbeQNDuMnig6pump",

    solscan:
        "https://solscan.io/token/6kirCtZ2pBqStJFKLD9PhBjLqYZpmbeQNDuMnig6pump",

    dexscreener:
        "https://dexscreener.com/solana/6kirCtZ2pBqStJFKLD9PhBjLqYZpmbeQNDuMnig6pump",

    x:
        "https://x.com/Antenna_lime"

};


/* =========================================
   CONSOLE BRANDING
========================================= */

console.log(
    "%c ANTENNA LIME ",
    "background:#b7ff2a;color:#071000;font-weight:800;padding:8px 12px;border-radius:6px;"
);

console.log(
    "%c LIVE ON SOLANA ",
    "color:#28f7ff;font-weight:700;"
);

console.log(
    "Contract:",
    ANTENNA_LIME.contract
);
