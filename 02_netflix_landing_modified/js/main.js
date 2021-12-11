const faqQs = document.querySelectorAll('.faq-q');
const faqAs = document.querySelectorAll('.faq-a');
const plus = document.querySelectorAll('.fa-plus');
const times = document.querySelectorAll('.fa-times');

function selectItem(e) {
    console.log(this.id);
    const faqA = document.querySelector(`#${this.id}-a`);
    const selectedPlus = document.querySelector(`#${this.id}-p`);
    const selectedTimes = document.querySelector(`#${this.id}-t`);
    if (faqA.classList.contains('hide')) {
        hideAll();
        faqA.classList.remove('hide');
        selectedPlus.classList.add('hide');
        selectedTimes.classList.remove('hide');
    } else {
        hideAll();
    }
}

function hideAll() {
    faqAs.forEach(item => item.classList.add('hide'));
    times.forEach(item => item.classList.add('hide'));
    plus.forEach(item => item.classList.remove('hide'));
}

// listen for tab click
faqQs.forEach(item => item.addEventListener('click', selectItem));
