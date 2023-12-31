const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            document.querySelector('.l-glitch-area').classList.add('is-glitched');

            document.querySelector('.l-glitch-area').onanimationend = () => {
                document.querySelector('.l-glitch-area').classList.remove('is-glitched');
            }

            return; // if we added the class, exit the function
        }
    });
});


document.querySelectorAll('.l-section').forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});

// To the trigger

const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            document.querySelector('.c-header').classList.add('is-film-border--no');
            document.querySelector('.is-film-border__bottom').classList.add('is-film-border--no');
            document.querySelector('.c-icon').classList.add('is-visible--no');
            document.querySelector('.c-header').classList.remove('is-film-border');
            document.querySelector('.is-film-border__bottom').classList.remove('is-film-border');
            document.querySelector('.c-icon').classList.remove('is-visible');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        document.querySelector('.c-header').classList.remove('is-film-border--no');
        document.querySelector('.is-film-border__bottom').classList.remove('is-film-border--no');
        document.querySelector('.c-icon').classList.remove('is-visible--no');
        document.querySelector('.c-header').classList.add('is-film-border');
        document.querySelector('.is-film-border__bottom').classList.add('is-film-border');
        document.querySelector('.c-icon').classList.add('is-visible');
    });
});

obs.observe(document.querySelector('.is-film-border__trigger'));

// To the projects

const o = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            document.getElementById('projects').classList.remove('is-hidden');
            document.getElementById('projects').classList.add('is-hidden-no');

            return; // if we added the class, exit the function
        }

        document.getElementById('projects').classList.remove('is-hidden-no');
        document.getElementById('projects').classList.add('is-hidden');
    });
});

o.observe(document.getElementById('projects'));
