let pcImgs;

window.addEventListener("load", event => {
    let noHover = window.matchMedia('(hover: none)').matches;

    if (noHover) {
        pcImgs = document.querySelectorAll(".pc-img");
        createObserver();
    }

}, false);


function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    };

    observer = new IntersectionObserver(handleIntersect, options);

    pcImgs.forEach(image => observer.observe(image));
}


function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('pc-force-grow');
        } else {
            entry.target.classList.remove('pc-force-grow');
        }
    });
}



