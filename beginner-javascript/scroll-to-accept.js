const terms  = document.querySelector('.terms-and-conditions');
const btn = document.querySelector('.accept');

function obCallback (payload) {
    if(payload[0].intersectionRatio === 1) {
        btn.disabled = false;
        ob.unobserve(terms.lastElementChild);
    } /* else {
        btn.disabled = true;
    } */
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);
/* terms.addEventListener('scroll', function(e) {
    console.log(e.currentTarget.scrollTop===e.currentTarget.scrollHeight);
}) */