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
            <a class="hero__body__buttons__btn" href="/assets/docs/carlos-cv-en.pdf" target="_blank">
                <svg>
                    <g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g>
                </svg>
                Download CV
            </a>
            <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" href="#contact">Contact me directly</a>
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
            <p class="row__text">These are languages I learned so far for Front end Development</p>
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
            <img class="form-container__img" src="https://i.pinimg.com/originals/07/08/ff/0708ff1a9c43249e39813d1c262adb34.png" alt="">

            <div class="google-container" id="google-auth">
                <!-- <span class="google-container__span">Sign in via google before you send me a message.</span> -->
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
                        <li class="footer__li__span">Firebase</li>
                        <li class="footer__li__span">GSAP Animation</li>
                    </ul>
                </div>

                <div class="footer__column">
                    <h3 class="footer__subtitle">Hobbies</h3>
                    <ul>
                        <li class="footer__li__span">History</li>
                        <li class="footer__li__span">Philosophy</li>
                        <li class="footer__li__span">Cycling</li>
                        <li class="footer__li__span">Soccer</li>
                        <li class="footer__li__span">E-Sports</li>
                    </ul>
                </div>

                <div class="footer__column">
                    <h3 class="footer__subtitle">Socials</h3>
                    <ul>
                        <li class="footer__li">
                            <svg class="footer__li__icon" xmlns="http://www.w3.org/2000/svg"><path d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="m20.52 3.449c-7.689-7.433-20.414-2.042-20.419 8.444 0 2.096.549 4.14 1.595 5.945l-1.696 6.162 6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99z"/></svg>
                            <span class="footer__li__span">+51 931 381 172</span>    
                        </li>
                        <li class="footer__li">
                            <svg class="footer__li__icon" xmlns="http://www.w3.org/2000/svg"><path d="m.184 10.462c-.779 4.906 1.401 10.823 8.123 13.006.12.022.231.032.335.032.782 0 1.32-.582 1.32-1.3-.097-.523.383-2.642-.92-2.357-2.519.536-2.821-.871-3.205-1.607 1.086 1.394 2.718 1.359 3.949.819.683-.3.326-1.064.65-1.343.496-.426.244-1.243-.407-1.314-2.314-.255-4.457-1.001-4.457-4.702 0-2.168 1.505-2.362 1.09-3.269-.015-.033-.333-.754-.045-1.849 1.419.262 2.072 1.28 2.753 1.097 1.687-.46 3.544-.46 5.23 0 .704.189 1.207-.801 2.738-1.103.441 1.654-.473 2.058.103 2.677.632.68.953 1.503.953 2.447 0 5.564-4.717 3.957-5.101 5.22-.088.288.005.599.235.792.61.513.53 1.83.465 2.889-.067 1.098-.125 2.045.482 2.579.214.19.595.393 1.284.253 6.634-2.131 8.83-8.022 8.063-12.917-2.096-13.368-21.526-13.352-23.638-.05zm8.27 10.978.004.505c-.523-.181-1.015-.39-1.475-.623.425.109.913.156 1.471.118zm.37-3.7c-.005.026-.01.053-.015.08-.853.252-1.509.001-1.957-.752 0-.001 0-.001-.001-.002.68.364 1.381.56 1.973.674zm3.176-15.74c11.833 0 14.502 16.267 3.469 19.941-.038-.297-.003-.857.021-1.252.058-.951.126-2.059-.213-2.985 5.088-1.059 5.513-6.646 3.554-9.135.243-.952.145-3.189-.729-3.463-.206-.065-1.305-.304-3.437 1.037-1.741-.416-3.62-.417-5.361 0-1.064-.667-3.462-1.752-3.922-.6-.534 1.342-.407 2.427-.248 3.03-1.739 2.204-1.218 5.894.534 7.626-.993-.475-2.361-.637-2.656.314-.323 1.037.912.911 1.679 2.804.073.236.208.513.415.788-6.811-5.565-3.525-18.105 6.894-18.105z"/></svg>
                            <span class="footer__li__span">TheCARGOS</span>    
                        </li>
                        <li class="footer__li">
                            <svg class="footer__li__icon" viewBox="0 0 512 512.00003" xmlns="http://www.w3.org/2000/svg"><path d="m511.945312 245.640625c-1.53125-66.980469-29.011718-129.398437-77.382812-175.753906-48.300781-46.289063-111.746094-71.082031-178.589844-69.839844-66.871094-1.253906-130.285156 23.554687-178.585937 69.839844-48.371094 46.355469-75.851563 108.773437-77.38281275 175.75l-.00390625.210937v.210938c.351562 68.261718 29.582031 133.15625 80.320312 178.640625v61.886719c0 12.011718 8.386719 22.476562 19.941407 24.882812 1.710937.355469 3.433593.53125 5.148437.53125 4.648438 0 9.21875-1.296875 13.242188-3.8125l49.738281-31.070312c28.050781 9.820312 57.320313 14.796874 87.078125 14.796874h.375c1.644531.03125 3.277344.046876 4.917969.046876 65.105469-.003907 126.65625-24.707032 173.800781-69.886719 48.371094-46.355469 75.851562-108.769531 77.382812-175.75l.007813-.34375zm-98.160156 154.753906c-41.515625 39.785157-95.707031 61.539063-153.039062 61.539063-1.488282 0-2.980469-.015625-4.476563-.042969l-.164062-.003906h-.160157c-27.667968.054687-54.917968-4.753907-80.917968-14.289063-6.433594-2.359375-13.441406-1.636718-19.222656 1.976563l-45.457032 28.394531v-56.925781c0-6.347657-2.761718-12.390625-7.574218-16.578125-45.867188-39.871094-72.371094-97.578125-72.742188-158.351563 1.394531-58.898437 25.585938-113.773437 68.132812-154.546875 42.59375-40.816406 98.558594-62.644531 157.511719-61.492187l.296875.003906.296875-.003906c58.992188-1.164063 114.921875 20.675781 157.515625 61.492187 42.507813 40.738282 66.695313 95.570313 68.128906 154.414063-1.429687 58.847656-25.617187 113.675781-68.128906 154.414062zm0 0"/><path d="m394.566406 163.722656-95.316406 51.96875-57.097656-48.960937c-9.878906-8.46875-24.824219-7.894531-34.019532 1.304687l-120.511718 120.511719c-4.71875 4.75-7.308594 11.046875-7.285156 17.738281.019531 6.695313 2.644531 12.980469 7.390624 17.695313 4.839844 4.808593 11.171876 7.316406 17.609376 7.316406 4.085937 0 8.210937-1.007813 12.027343-3.078125l95.320313-51.96875 57.15625 48.980469c9.878906 8.46875 24.824218 7.894531 34.019531-1.304688l120.53125-120.53125c8.6875-8.769531 9.644531-22.804687 2.238281-32.671875-7.410156-9.914062-21.191406-12.921875-32.0625-7zm-108.683594 135.710938-57.894531-49.613282c-4.046875-3.46875-9.164062-5.257812-14.3125-5.257812-3.59375 0-7.203125.871094-10.46875 2.652344l-69.894531 38.105468 92.792969-92.792968 57.828125 49.589844c6.875 5.894531 16.835937 6.945312 24.792968 2.609374l70.066407-38.203124zm0 0"/></svg>
                            <span class="footer__li__span">carlos.loayza.5</span>    
                        </li>
                        <li class="footer__li">
                            <span class="footer__li__span">loayzavelez@gmail.com</span>    
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer__spans">
                <span class="footer__span">This website design is basically a copy of discord.gg.</span>
                <span class="footer__span">This website is still in progress...</span>
            </div>
        </footer>
    </section>
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
                <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" style="width: unset;" href="/assets/docs/carlos-cv-en.pdf">
                    <svg>
                        <g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g>
                    </svg>
                    Download CV
                </a>
                <a class="hero__body__buttons__btn hero__body__buttons__btn--dark" style="width: unset;" href="#contact2">Contact me directly</a>
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
                        <li class="footer__li__span">Firebase</li>
                        <li class="footer__li__span">GSAP Animation</li>
                    </ul>
                </div>

                <div class="footer__column">
                    <h3 class="footer__subtitle">Hobbies</h3>
                    <ul>
                        <li class="footer__li__span">History</li>
                        <li class="footer__li__span">Philosophy</li>
                        <li class="footer__li__span">Cycling</li>
                        <li class="footer__li__span">Soccer</li>
                        <li class="footer__li__span">E-Sports</li>
                    </ul>
                </div>

                <div class="footer__column">
                    <h3 class="footer__subtitle">Socials</h3>
                    <ul>
                        <li class="footer__li">
                            <svg class="footer__li__icon" xmlns="http://www.w3.org/2000/svg"><path d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="m20.52 3.449c-7.689-7.433-20.414-2.042-20.419 8.444 0 2.096.549 4.14 1.595 5.945l-1.696 6.162 6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99z"/></svg>
                            <span class="footer__li__span">+51 931 381 172</span>    
                        </li>
                        <li class="footer__li">
                            <svg class="footer__li__icon" xmlns="http://www.w3.org/2000/svg"><path d="m.184 10.462c-.779 4.906 1.401 10.823 8.123 13.006.12.022.231.032.335.032.782 0 1.32-.582 1.32-1.3-.097-.523.383-2.642-.92-2.357-2.519.536-2.821-.871-3.205-1.607 1.086 1.394 2.718 1.359 3.949.819.683-.3.326-1.064.65-1.343.496-.426.244-1.243-.407-1.314-2.314-.255-4.457-1.001-4.457-4.702 0-2.168 1.505-2.362 1.09-3.269-.015-.033-.333-.754-.045-1.849 1.419.262 2.072 1.28 2.753 1.097 1.687-.46 3.544-.46 5.23 0 .704.189 1.207-.801 2.738-1.103.441 1.654-.473 2.058.103 2.677.632.68.953 1.503.953 2.447 0 5.564-4.717 3.957-5.101 5.22-.088.288.005.599.235.792.61.513.53 1.83.465 2.889-.067 1.098-.125 2.045.482 2.579.214.19.595.393 1.284.253 6.634-2.131 8.83-8.022 8.063-12.917-2.096-13.368-21.526-13.352-23.638-.05zm8.27 10.978.004.505c-.523-.181-1.015-.39-1.475-.623.425.109.913.156 1.471.118zm.37-3.7c-.005.026-.01.053-.015.08-.853.252-1.509.001-1.957-.752 0-.001 0-.001-.001-.002.68.364 1.381.56 1.973.674zm3.176-15.74c11.833 0 14.502 16.267 3.469 19.941-.038-.297-.003-.857.021-1.252.058-.951.126-2.059-.213-2.985 5.088-1.059 5.513-6.646 3.554-9.135.243-.952.145-3.189-.729-3.463-.206-.065-1.305-.304-3.437 1.037-1.741-.416-3.62-.417-5.361 0-1.064-.667-3.462-1.752-3.922-.6-.534 1.342-.407 2.427-.248 3.03-1.739 2.204-1.218 5.894.534 7.626-.993-.475-2.361-.637-2.656.314-.323 1.037.912.911 1.679 2.804.073.236.208.513.415.788-6.811-5.565-3.525-18.105 6.894-18.105z"/></svg>
                            <span class="footer__li__span">TheCARGOS</span>    
                        </li>
                        <li class="footer__li">
                            <svg class="footer__li__icon" viewBox="0 0 512 512.00003" xmlns="http://www.w3.org/2000/svg"><path d="m511.945312 245.640625c-1.53125-66.980469-29.011718-129.398437-77.382812-175.753906-48.300781-46.289063-111.746094-71.082031-178.589844-69.839844-66.871094-1.253906-130.285156 23.554687-178.585937 69.839844-48.371094 46.355469-75.851563 108.773437-77.38281275 175.75l-.00390625.210937v.210938c.351562 68.261718 29.582031 133.15625 80.320312 178.640625v61.886719c0 12.011718 8.386719 22.476562 19.941407 24.882812 1.710937.355469 3.433593.53125 5.148437.53125 4.648438 0 9.21875-1.296875 13.242188-3.8125l49.738281-31.070312c28.050781 9.820312 57.320313 14.796874 87.078125 14.796874h.375c1.644531.03125 3.277344.046876 4.917969.046876 65.105469-.003907 126.65625-24.707032 173.800781-69.886719 48.371094-46.355469 75.851562-108.769531 77.382812-175.75l.007813-.34375zm-98.160156 154.753906c-41.515625 39.785157-95.707031 61.539063-153.039062 61.539063-1.488282 0-2.980469-.015625-4.476563-.042969l-.164062-.003906h-.160157c-27.667968.054687-54.917968-4.753907-80.917968-14.289063-6.433594-2.359375-13.441406-1.636718-19.222656 1.976563l-45.457032 28.394531v-56.925781c0-6.347657-2.761718-12.390625-7.574218-16.578125-45.867188-39.871094-72.371094-97.578125-72.742188-158.351563 1.394531-58.898437 25.585938-113.773437 68.132812-154.546875 42.59375-40.816406 98.558594-62.644531 157.511719-61.492187l.296875.003906.296875-.003906c58.992188-1.164063 114.921875 20.675781 157.515625 61.492187 42.507813 40.738282 66.695313 95.570313 68.128906 154.414063-1.429687 58.847656-25.617187 113.675781-68.128906 154.414062zm0 0"/><path d="m394.566406 163.722656-95.316406 51.96875-57.097656-48.960937c-9.878906-8.46875-24.824219-7.894531-34.019532 1.304687l-120.511718 120.511719c-4.71875 4.75-7.308594 11.046875-7.285156 17.738281.019531 6.695313 2.644531 12.980469 7.390624 17.695313 4.839844 4.808593 11.171876 7.316406 17.609376 7.316406 4.085937 0 8.210937-1.007813 12.027343-3.078125l95.320313-51.96875 57.15625 48.980469c9.878906 8.46875 24.824218 7.894531 34.019531-1.304688l120.53125-120.53125c8.6875-8.769531 9.644531-22.804687 2.238281-32.671875-7.410156-9.914062-21.191406-12.921875-32.0625-7zm-108.683594 135.710938-57.894531-49.613282c-4.046875-3.46875-9.164062-5.257812-14.3125-5.257812-3.59375 0-7.203125.871094-10.46875 2.652344l-69.894531 38.105468 92.792969-92.792968 57.828125 49.589844c6.875 5.894531 16.835937 6.945312 24.792968 2.609374l70.066407-38.203124zm0 0"/></svg>
                            <span class="footer__li__span">carlos.loayza.5</span>    
                        </li>
                        <li class="footer__li">
                            <span class="footer__li__span">loayzavelez@gmail.com</span>    
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer__spans">
                <span class="footer__span">This website design is basically a copy of discord.gg.</span>
                <span class="footer__span">This website is still in progress...</span>
            </div>
        </footer>
    </section>
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
