import React from "react";
import Nav from './components/Navbar';
import About from `./components/About`;
import ipsumImg from './images/BioIpsum.png';
import quizImg from './images/coding-quiz.png';
import noteImg from './images/note-taker.png';
import skynotesImg from './images/Skynotes.png';
import textImg from './images/text-editor.png';
import triviaImg from './images/Trivia site.png';

function Page() {
    return <body>
        <div>
            <Nav />
        </div>
        <div class="col-8 row justify-content-end version-box">

            A. Losey Version 2.7 now comes with ability to code!

        </div>
        <div>
            <About />
        </div>
        <div class="container purp-text">
            <div class="col-3">
                <p class="h4" id="work">Work</p>
            </div>
            <div class="col-12 row purp-bg justify-content-between">

                <Project img={ipsumImg} imgAlt={'The title "Bio Ipsum" and some randomly generated text'} title={'Biological Jargon Lorum Ipsum'} deployLink={"https://ajlosey.github.io/Bio-Ipsum/"} repoLink={"https://github.com/AJLosey/Bio-Ipsum"} />

                <Project img={skynotesImg} imgAlt={"Buttons for generating music, followed by playlist images with links to listen to them"} title={'Skynotes'} deployLink={"https://mach2258.github.io/Weather-music/"} repoLink={"https://github.com/mach2258/Weather-music"} />

            </div>
            <div class="col-12 row purp-bg justify-content-between">

                <Project img={triviaImg} imgAlt={"The title 'Bio Ipsum' and some randomly generated text"} title={'Trivia Quiz Website'} deployLink={"https://triviabymmaac.herokuapp.com/"} repoLink={"https://github.com/AJLosey/trivia-database"} />

                <Project img={textImg} imgAlt={"A blue navigation bar above a black text field"} title={'Just Another Text Editor'} deployLink={"https://limitless-depths-34133.herokuapp.com/"} repoLink={"https://github.com/AJLosey/text-editor"} />

            </div>
            <div class="col-12 row purp-bg justify-content-between">

                <Project img={quizImg} imgAlt={"A timer, question, answers, and high scores option"} title={'Timed Code Quiz'} deployLink={"https://triviabymmaac.herokuapp.com/"} repoLink={"https://github.com/AJLosey/trivia-database"} />

                <Project img={noteImg} imgAlt={"A simple form for notes with some saved entries on the side"} title={'Note Taker'} deployLink={"https://ajlosey.github.io/code-quiz/"} repoLink={"https://github.com/AJLosey/code-quiz"} />

            </div>
        </div>

        <div class="container purp-text py-3">
            <div class="col-3">
                <p class="h4" id="contact-me">Contact Me</p>
            </div>
            <div class="purp-bg">
                <ul class="list-group">
                    <li class="list-group-item purp-bg pl-5">Phone Number: 937-831-8424</li>
                    <li class="list-group-item purp-bg pl-5">Email: aaronlosey11@hotmail.com</li>
                    <li class="list-group-item purp-bg pl-5"><a href="https://github.com/AJLosey">Github Profile</a></li>
                    <li class="list-group-item purp-bg pl-5"><a
                        href="https://www.linkedin.com/in/aaron-losey-3b9a3b142/">Linkin
                        Profile</a>
                    </li>
                </ul>
            </div>
            <div class="col-12">

            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>


    </body>
}