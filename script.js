// NAVBAR 
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        mobileMenu.classList.remove("hidden");
        const height = mobileMenu.scrollHeight + "px";
        mobileMenu.style.height = "0px"; // Reset height to 0 for transition

        requestAnimationFrame(() => {
            mobileMenu.style.height = height; // Set to full height for slide down
        });

        mobileMenu.addEventListener("transitionend", function handler() {
            mobileMenu.style.height = "auto";
            mobileMenu.removeEventListener("transitionend", handler);
        }); 

    } else {
        const height = mobileMenu.scrollHeight + "px";
        mobileMenu.style.height = height; // Set to full height for slide up

        requestAnimationFrame(() => {
            mobileMenu.style.height = "0px"; // Set to 0 for slide up
        })

        mobileMenu.addEventListener("transitionend", function handler() {
            mobileMenu.classList.add("hidden");
            mobileMenu.removeEventListener("transitionend", handler);
        })

    }
});

let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const curentScrollY = window.scrollY;

    if (curentScrollY > lastScrollY && curentScrollY > 50) {
        navbar.style.transform = "translateY(-100%)"; // Hide navbar on scroll down
    } else {
        navbar.style.transform = "translateY(0)"; // Show navbar on scroll up
    }

})


// LANGUAGE SWTICHER
const langContainers = document.querySelectorAll('.lang-container');
const translatable = document.querySelectorAll('.translate');

function setLanguage(lang) {
    const selectedOption = document.querySelector(`.lang-option[data-lang="${lang}"]`);
    if (!selectedOption) return;

    const flagSrc = selectedOption.querySelector('img').src;

    document.querySelectorAll('.selected-flag').forEach(flag => {
        flag.src = flagSrc;
    });

    translatable.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    localStorage.setItem('selectedLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    setLanguage(savedLang);
});

langContainers.forEach(container => {
    const btn = container.querySelector('.lang-btn');
    const menu = container.querySelector('.lang-menu');

    btn.addEventListener('click', () => {
        const isHidden = menu.classList.contains('hidden');
        if (isHidden) {
            menu.classList.remove('hidden');
            setTimeout(() => {
                menu.classList.remove('scale-95', 'opacity-0');
                menu.classList.add('scale-100', 'opacity-100');
            }, 10);
        } else {
            menu.classList.add('scale-95', 'opacity-0');
            setTimeout(() => menu.classList.add('hidden'), 200);
        }
    });

    menu.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);

            menu.classList.add('scale-95', 'opacity-0');
            setTimeout(() => menu.classList.add('hidden'), 200);
        });
    });

    window.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.add('scale-95', 'opacity-0');
            setTimeout(() => menu.classList.add('hidden'), 200);
        }
    });
});
