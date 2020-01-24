let aboutPage = document.getElementById('about');
let workPage = document.getElementById('work');
let contactPage = document.getElementById('contact');
let navContainer = document.getElementById('navbarNav');
let navItems = navContainer.getElementsByTagName('LI');

const workPageActive = () => {
    setActiveClass();
    const content = document.getElementById('current-page-content');
    content.innerHTML =
        `        
            <div class="col justify-items-center align-items-center">
                <div class="row row-cols-1 row-cols-md-2 justify-content-center align-items-center">
                    <div class="card custom-card col work-card work-1st-item">
                        <div class="card-body">
                            <a href="img/SofiaYli-PelkonenCV.pdf" target="_blank" class="stretched-link">CV</a>
                        </div>
                    </div>
                    <div class="card custom-card col work-card work-2nd-item">
                        <div class="card-body">
                            <a href="https://github.com/sofyp/" target="_blank" class="stretched-link">Github</a>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-2 justify-content-center align-items-center">
                    <div class="card custom-card col work-card work-3rd-item">
                        <div class="card-body">
                            <a href="http://users.metropolia.fi/~sofiat/QueueCam/public/" target="_blank" class="stretched-link">Cafeteria queue watch</a>
                        </div>
                    </div>
                    <div class="card custom-card col work-card work-4th-item">
                        <div class="card-body">
                            <a href="http://users.metropolia.fi/~sofiat/Infoboard/" target="_blank" class="stretched-link">Infowall with APIs</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
};
const contactPageActive = () => {
    setActiveClass();
    const content = document.getElementById('current-page-content');
    content.innerHTML =
        `
            <div class="col justify-items-center align-items-center">
                <div class="row row-cols-1 row-cols-md-2 justify-content-center align-items-center">
                    <div class="card custom-card col work-card work-1st-item">
                        <div class="card-body">
                            <a href="mailto:sofia.ylipelkonen@gmail.com" target="_blank" class="stretched-link">email</a>
                        </div>
                    </div>
                    <div class="card custom-card col work-card work-2nd-item">
                        <div class="card-body">
                            <a href="https://linkedin.com/in/sofia-yli-pelkonen" target="_blank" class="stretched-link">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
};
const aboutPageActive = () => {
    setActiveClass();
    const content = document.getElementById('current-page-content');
    content.innerHTML =
        `
            <div class="mr-2 ml-2 mb-2" style="width: 18rem;">
                    <img src="img/portfoliokuva.png" style="width: 18rem; filter: grayscale(100%)">
            </div>
            <div class="card custom-card about-card mr-2 ml-2" style="max-width: 40rem; min-height: 55vh">
                <div class="card-body">
                    <h1 style="font-weight: 300">Sofia Yli-Pelkonen</h1><br>
                    <p class="card-text">
                    Third year media tech & web development student <br>
                    Passionate about simplicity <br>
                    Design meets development <br>
                    Life goal: helping to stop climate change using technology<br>
                    Likes: dogs, snow and food
                    </p>
                </div>
            </div>
        `;
};

const setActiveClass =()=>{
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
};

workPage.addEventListener("click", workPageActive);
contactPage.addEventListener("click", contactPageActive);
aboutPage.addEventListener("click", aboutPageActive);
document.addEventListener("DOMContentLoaded", aboutPageActive);