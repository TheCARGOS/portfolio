const home = `
<div class="hero">
<div class="hero__container">
    <header class="hero__header" style="display: none;">
        <h1 class="hero__header__title">@TheCARGOS</h1>
        <nav>
            <ul class="hero__header__nav">
                <li class="hero__header__nav__li"><a href="#skills">Languages</a></li>
                <li class="hero__header__nav__li"><a href="#projects">Projects & Challenges</a></li>
                <li class="hero__header__nav__li"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div style="z-index: 400;">
            <a id="login-button" class="hero__header__btn-lang" href="#!" onclick="googleSignin()">Login</a>
            <div id="google-user" class="google-user hide-by-default">
                <img id="user-photo-2" class="google-user__photo" src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="">
                <h2 id="user-name-2" class="google-user__name"></h2>
            </div>
        </div>
    </header>

    <header class="hero__header hero__header--mobile">
        <h1 class="hero__header__title">@TheCARGOS</h1>
        <a class="hero__header__btn-lang" href="#!">Login</a>
    </header>

    <div class="hero__body">
        <h1 class="hero__body__title">Carlos Loayza <br />Jr. Frontend Developer</h1>
        <p class="hero__body__text">
            I am 24 years old, i'm currently living in Perú, SA.
            <br />
            I feel comfortable making design into code (HTML, CSS, Javascript)
        </p>
        
        <div class="hero__body__buttons">
            <a class="hero__body__buttons__btn" href="#!">
                <svg>
                    <g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g>
                </svg>
                Download CV
            </a>
            <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" href="#!">Contact me directly</a>
        </div>
    </div>
    <div class="hero__images">
        <img class="hero__images__main-image hide-on-mobile" src="https://discord.com/assets/7b01f72a2054561145b6dd04add417c0.svg" alt="">
        <img class="hero__images__main-image" src="https://discord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg" alt="">
    
        <img class="hero__images__boat-1 hide-on-mobile" src="https://discord.com/assets/94acf432b564660994742251c2a5f222.svg" alt="">
        <img class="hero__images__boat-2 hide-on-mobile" src="https://discord.com/assets/4bdac631250f5f9e8a4b928d5efa22c8.svg" alt="">
        <img class="hero__images__boat-3 hide-on-mobile" src="https://discord.com/assets/31fde13d3508b8ddb01cf817ad09c690.svg" alt="">
    
        <img class="hero__images__bg-1 hide-on-mobile" src="https://discord.com/assets/edaebb01cd24df779f6feae9a34bd7d8.svg" alt="">

        <img class="hero__images__balloon hide-on-mobile" src="https://discord.com/assets/9c0629769616f9629689a0e68a2e57b7.svg" alt="">
    </div>
</div>
</div>

<section>
<div class="container">
    <div class="row" id="skills">
        <img class="row-item" src="https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg" alt="">
        <div class="row-item row-item--text">
            <h2 class="row__title">Languages I learn so far...</h2>
            <p class="row__text">These are languages I know so far for Front end Development</p>
            <div class="skills">
                <img class="skills__logo" src="https://pngimage.net/wp-content/uploads/2019/05/html5-icon-png-white-.png" alt="">
                <img class="skills__logo" src="https://cdn.iconscout.com/icon/free/png-256/css-116-555915.png" alt="">
                <img class="skills__logo" src="https://www.shareicon.net/data/256x256/2015/10/06/112983_line_512x512.png" alt="">
                <img class="skills__logo" src="https://cdn.iconscout.com/icon/free/png-256/javascript-20-555998.png" alt="">
                <img class="skills__logo" src="https://cdn.iconscout.com/icon/free/png-256/vuejs-2749381-2284771.png" alt="">
                <img class="skills__logo" src="https://www.codester.com/static/uploads/items/12158/icon.png" alt="">
            </div>
        </div>
    </div>
</div>
</section>
<svg class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-haxJK1" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="var(--off-white)"></path></svg>
<section style="background: var(--off-white); margin-top: -10px;">
<div class="container">
    <div class="row row--reverse" id="projects">
        <div class="row-item row-item--text">
            <h2 class="row__title">Projects & Challenges</h2>
            <p class="row__text">2019 was the year I started coding for others, one year later I feel comfortable making design into code.</p>
            <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" href="#!" onclick="goTo('projects')">Review Projects</a>
        </div>
        <img class="row-item" src="https://discord.com/assets/98c9edf635a98377ec579aaa19ed47be.svg" alt="">
    </div>
</div>
<svg class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-haxJK1" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="white"></path></svg>
</section>
<section>
<div class="container">
    <div class="column" id="contact">
        <h2 class="row__title">Contact me</h2>
        <p class="row__text">Feel free to contact me via this form or just simply message me from whatsapp / gmail directly.</p>
    
        <div class="row row--reverse" style="padding: 0;">
            <div class="google-container" id="google-auth">
                <span class="google-container__span">Sign in via google before you send me a message.</span>
                <div class="form__btn--google" onclick="googleSignin()">
                    <img class="form__btn__img--google" src="https://img-authors.flaticon.com/google.jpg" alt="">
                    <span class="form__btn__span">Google Signin</span>
                </div>
            </div>
            <form class="form hide-by-default" id="contactForm" action="/contact" method="POST">
                <fieldset class="fieldset">
                    <div class="profile">
                        <img id="user-photo" class="profile__img" src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="">
                        <h2 id="user-name" class="profile__name"></h2>
                    </div>
                    <!-- <button onclick="googleSignout()">Google Signout</button> -->
                </fieldset>

                <!-- HIDDEN CONTENT -->
                <fieldset class="fieldset hide-by-default">
                    <label class="form__label" for="name">NAME</label>
                    <input class="form__input" type="text" id="fullname" placeholder="ex: Remote Frontend Job">
                </fieldset>
                <fieldset class="fieldset hide-by-default">
                    <label class="form__label" for="email">EMAIL</label>
                    <input class="form__input" type="text" id="email" placeholder="ex: Remote Frontend Job">
                </fieldset>
                <!-- END OF HIDDEN CONTENT -->

                <fieldset class="fieldset">
                    <label class="form__label" for="subject">SUBJECT</label>
                    <input class="form__input" type="text" id="subject" placeholder="ex: Remote Frontend Job">
                </fieldset>
                <fieldset class="fieldset">
                    <label class="form__label" for="name">MESSAGE</label>
                    <input class="form__input" type="text" id="content" placeholder="ex: whatever you wan to tell me...">
                </fieldset>
                <button class="hero__body__buttons__btn hero__body__buttons__btn--dark" type="submit">Send</button>
            </form>
            <img class="form-container__img" src="https://discord.com/assets/351330f6409e8046b0c996093e3e827b.svg" alt="">
        </div>
    </div>

    <!-- The Modal -->
    <div id="modalForm" class="modal-form">
        <!-- Modal content -->
        <div class="modal-form__content">
        <button id="modalClose" class="modal-form__close">x</button>
        <p id="modalMessage" class="modal-form__text"></p>
        </div>
    </div>
</div>
</section>

<section class="footer section--dark">
<footer class="container">
    <div class="footer__row">
        <div class="footer__column footer__colum--">
            <h2 class="footer__title">More About me</h2>
            <img class="footer__img" src="/assets/carlos.png" alt="">
            <p class="footer__data">
                <img class="footer__data__flag" src="https://s3.amazonaws.com/pure_charity/uploads/production/avatar/image/34591/medium_Peru_Flag.png" alt="">
                <span class="footer__data__name">Carlos Loayza</span>
            </p>
        </div>

        <div class="footer__column">
            <h3 class="footer__subtitle">Currently Learning</h3>
            <ul>
                <li class="footer__li">Firebase</li>
                <li class="footer__li">GSAP Animation</li>
            </ul>
        </div>

        <div class="footer__column">
            <h3 class="footer__subtitle">Hobbies</h3>
            <ul>
                <li class="footer__li">History</li>
                <li class="footer__li">Philosophy</li>
                <li class="footer__li">Cycling</li>
                <li class="footer__li">Soccer</li>
                <li class="footer__li">E-Sports</li>
            </ul>
        </div>

        <div class="footer__column">
            <h3 class="footer__subtitle">Socials</h3>
            <ul>
                <li class="footer__li">thecargos</li>
                <li class="footer__li">carlos.loayza.5</li>
            </ul>
        </div>
    </div>

    <span class="footer__foot">This website design is basically a copy of discord.gg</span>
</footer>
</section>
`

const projects = `
<div class="hero hero--projects">
    <div class="hero__container hero--projects__container">
        <header class="hero__header">
            <svg onclick="goTo('home')" class="hero--projects__header__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
        </header>
    
        <div class="hero__body hero--projects__body">
            <h1 class="hero__body__title hero--projects__body__title">Projects & <br>Challenges</h1>
            <p class="hero__body__text hero--projects__body__text">
                This year i propose myself to make frontend challanges every week. so stay tunned!
            </p>
            
            <div class="hero__body__buttons hero--projects__body__buttons">
                <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" style="width: unset;" href="#!">
                    <svg>
                        <g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g>
                    </svg>
                    Download CV
                </a>
                <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" style="width: unset;" href="#!">Contact me directly</a>
            </div>
        </div>
        <div class="hero__images">
            <img class="hero__images__video-alt" src="https://discord.com/assets/b941bc1dfe379db6cc1f2acc5a612f41.png" />
            <video class="hero--projects__images__video hide-on-mobile" src="http://discord.com/assets/9cb4bd901decf27f803a41801e39beb8.webm" loop autoplay></video>
        </div>
    </div>
    <svg style="position: absolute; bottom: 0; width: 100%; left: 0; z-index: 100;" class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-haxJK1" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="var(--white)"></path></svg>
    </div>
    
    <section>
    <div class="container">
        <h2 class="row__title text-center">Projects since 2019</h2>
        <div class="row">
            <img class="row-item" style="width: 100%; height: 600px;" src="https://discord.com/assets/fbeecd9630673fad538917f2c33a8f62.svg" alt="">
            <div class="row-item row-item--text">
                <h2 class="row__title">Frontend - Firebase App</h2>
                <h3 class="row__subtitle">Portfolio</h3>
                <p class="row__text">
                    Using Firebase as a Backend service i created this simple website to show things i've been doing about programming.
                    I also used vanilla HTML, CSS and Javascript to make sure it's load time is really fast!
                </p>
                <div class="skills">
                    <img class="skills__logo" src="https://pngimage.net/wp-content/uploads/2019/05/html5-icon-png-white-.png" alt="">
                    <img class="skills__logo" src="https://cdn.iconscout.com/icon/free/png-256/css-116-555915.png" alt="">
                    <img class="skills__logo" src="https://cdn.iconscout.com/icon/free/png-256/javascript-20-555998.png" alt="">
                    <img class="skills__logo" src="https://www.codester.com/static/uploads/items/12158/icon.png" alt="">
                </div>
                <div class="hero__body__buttons hero--projects__body__buttons">
                    <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" href="https://github.com/TheCARGOS/portfolio" target="_blank">View Code</a>
                </div>
            </div>
        </div>
    
        <div class="row row--reverse">
            <div class="row-item row-item--text">
                <h2 class="row__title">Full Stack - MEVN</h2>
                <h3 class="row__subtitle">Sporting Callao 'Close Friends Futbol Club'</h3>
                <p class="row__text">
                    I created this PWA for my close friends, now they can rate each other in order to see who is the best player among us <br />
                    We have used JSON Web Token for authentication, Mongodb as a database and Nodejs as a runtime environtment.
                </p>
                <div class="skills">
                    <img class="skills__logo" src="https://pngimage.net/wp-content/uploads/2019/05/html5-icon-png-white-.png" alt="">
                    <img class="skills__logo" src="https://www.shareicon.net/data/256x256/2015/10/06/112983_line_512x512.png" alt="">
                    <img class="skills__logo" src="https://cdn.iconscout.com/icon/free/png-256/vuejs-2749381-2284771.png" alt="">
                    <img class="skills__logo" src="https://findicons.com/files/icons/2773/pictonic_free/128/prog_nodejs01.png" alt="">
                    <img class="skills__logo" src="https://findicons.com/files/icons/2773/pictonic_free/256/dbs_mongodb.png" alt="">
                </div>
                <div class="hero__body__buttons hero--projects__body__buttons">
                    <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" href="https://github.com/TheCARGOS/sporting">View Code</a>
                    <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" href="http://sportingcallao.club/" target="_blank">Visit Project</a>
                </div>
            </div>
            <img class="row-item" style="width: 100%; height: 600px; object-fit: contain;" src="/assets/phones-sporting.png" alt="">
        </div>
    
        <div class="row">
            <img class="row-item" style="width: 100%; height: 600px; object-fit: contain;" src="/assets/phones-tranzfer.png" alt="">
            <div class="row-item row-item--text">
                <h2 class="row__title">MEVN - Full Stack</h2>
                <h3 class="row__subtitle">Tranzferme</h3>
                <p class="row__text">
                    I propose to CEOs do not use an API at the moment because we couldn't afford it, so i tell them
                    with CheeriosJS library i could get money exchange rates between of all countries for free! 
                </p>
                <div class="skills">
                    <img class="skills__logo" src="https://pngimage.net/wp-content/uploads/2019/05/html5-icon-png-white-.png" alt="">
                    <img class="skills__logo" src="https://www.shareicon.net/data/256x256/2015/10/06/112983_line_512x512.png" alt="">
                    <img class="skills__logo" src="https://cdn.iconscout.com/icon/free/png-256/vuejs-2749381-2284771.png" alt="">
                    <img class="skills__logo" src="https://findicons.com/files/icons/2773/pictonic_free/128/prog_nodejs01.png" alt="">
                    <img class="skills__logo" src="https://findicons.com/files/icons/2773/pictonic_free/256/dbs_mongodb.png" alt="">
                </div>
                <div class="hero__body__buttons hero--projects__body__buttons">
                    <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" href="https://tranzfer.me/" target="_blank">Visit Project</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="footer section--dark">
<footer class="container">
    <div class="footer__row">
        <div class="footer__column footer__colum--">
            <h2 class="footer__title">More About me</h2>
            <img class="footer__img" src="/assets/carlos.png" alt="">
            <p class="footer__data">
                <img class="footer__data__flag" src="https://s3.amazonaws.com/pure_charity/uploads/production/avatar/image/34591/medium_Peru_Flag.png" alt="">
                <span class="footer__data__name">Carlos Loayza</span>
            </p>
        </div>

        <div class="footer__column">
            <h3 class="footer__subtitle">Currently Learning</h3>
            <ul>
                <li class="footer__li">Firebase</li>
                <li class="footer__li">GSAP Animation</li>
            </ul>
        </div>

        <div class="footer__column">
            <h3 class="footer__subtitle">Hobbies</h3>
            <ul>
                <li class="footer__li">History</li>
                <li class="footer__li">Philosophy</li>
                <li class="footer__li">Cycling</li>
                <li class="footer__li">Soccer</li>
                <li class="footer__li">E-Sports</li>
            </ul>
        </div>

        <div class="footer__column">
            <h3 class="footer__subtitle">Socials</h3>
            <ul>
                <li class="footer__li">thecargos</li>
                <li class="footer__li">carlos.loayza.5</li>
            </ul>
        </div>
    </div>

    <span class="footer__foot">This website design is basically a copy of discord.gg</span>
</footer>
</section>
`

function goTo (route) {
    const body = document.getElementById("body")
    if (route == "projects") {
        body.innerHTML = projects
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else {
        if ( route == "home" ) {
            body.innerHTML = home
        }
    }
}

// body.innerHTML = projects
