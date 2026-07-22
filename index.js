const signUp = document.querySelector('.btn-signup');
const signUpWindow = document.querySelector('.js-sign-up-window');
signUp.addEventListener('click', () => {
    signUpWindow.classList.add('sign-up-window-visible');
});

const signUpWindowJs = document.querySelector('.close-btn');
signUpWindowJs.addEventListener('click', () => {
    signUpWindow.classList.remove('sign-up-window-visible');
});

const logInBtn = document.querySelector('.btn-login'); 
const logInWindow = document.querySelector('.js-login-window');
logInBtn.addEventListener('click', () => {
    logInWindow.classList.add('log-in-window-visible');
});

const logInWindowJs = document.querySelector('.js-login-close');
logInWindowJs.addEventListener('click', () => {
    logInWindow.classList.remove('log-in-window-visible');
});

const testimonials = document.querySelectorAll(
    ".testimonial-card, .testimonial-card2"
);


document.addEventListener("DOMContentLoaded", () => {
    const testimonialsData = [
        {
            avatar: "images/Image (1).png",
            quote: "On the Windows talking painted pasture yet its <br> express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
            name: "Mike Taylor",
            location: "Lahore, Pakistan"
        },
        {
            avatar: "images/images.png",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia veritatis dolorum ea, consequatur quos dignissimos error recusandae! Voluptatem ex labore culpa consectetur adipisci nemo quod aliquid explicabo dignissimos aperiam.",
            name: "Chris Tomas",
            location: "CEO of Red Button"
        },{
            avatar: "images/images.png",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem earum nostrum cupiditate necessitatibus repudiandae praesentium debitis, facere enim beatae consequatur exercitationem! Aperiam nulla dolorem modi tempora veritatis minus laboriosam!",
            name: "Anna Smith",
            location: "New York, USA"
        }
    ];

    let currentIndex = 0;
    const revContainer = document.querySelector(".rev");
    const arrowUp = document.querySelector(".arrow-up");
    const arrowDown = document.querySelector(".arrow-down");

    function renderTestimonial(index) {
        const item = testimonialsData[index];
        
        const existingCard = revContainer.querySelector(".testimonial-card");
        if (existingCard) {
            existingCard.remove();
        }

        const cardHTML = `
            <div class="testimonial-card">
                <img src="${item.avatar}" alt="User" class="avatar">
                <div class="te">
                    <p class="quote">${item.quote}</p>
                    <div class="q">
                        <h4 class="name1">${item.name}</h4>
                        <p class="location">${item.location}</p>
                    </div>
                </div>
            </div>
        `;


        revContainer.insertAdjacentHTML("afterbegin", cardHTML);
    }

    renderTestimonial(currentIndex);

    arrowDown.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonialsData.length;
        renderTestimonial(currentIndex);
    });

    arrowUp.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
        renderTestimonial(currentIndex);
    });
});