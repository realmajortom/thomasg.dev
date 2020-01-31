let landingSection;
let headerBox;

let contactWrapper;
let footer;


window.addEventListener('load', e => {
    landingSection = document.querySelector('#landing-section');
    contactWrapper = document.querySelector('#contact-wrapper');

    headerBox = document.querySelector('#header-box');
    footer = document.querySelector('#footer');

    createHFObserver();
});


function createHFObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    };

    observer = new IntersectionObserver(handleHFIntersect, options);
    observer.observe(landingSection);
    observer.observe(contactWrapper);
}


function handleHFIntersect(entries, observer) {
    entries.forEach(entry => {
        let elem = entry.target.id;

        if (elem === 'landing-section') {
            handleHeader(entry.isIntersecting);
        }

        if (elem === 'contact-wrapper') {
           handleFooter(entry.isIntersecting);
        }
    })
}


function handleHeader(intersecting) {
    if (intersecting) {
        headerBox.classList.remove('no-header-box');
    } else {
        headerBox.classList.add('no-header-box');
    }
}


function handleFooter(intersecting) {
    if (intersecting) {
        footer.classList.remove('no-footer');
    } else {
        footer.classList.add('no-footer');
    }
}