import React from "react";
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Project } from './components/Project'
import ipsumImg from './images/BioIpsum.png';
import quizImg from './images/coding-quiz.png';
import noteImg from './images/note-taker.png';
import skynotesImg from './images/Skynotes.png';
import textImg from './images/text-editor.png';
import triviaImg from './images/Trivia site.png';
import './App.css';

function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="col-8 row justify-content-end version-box">

        A. Losey Version 2.7 now comes with ability to code!

      </div>
      <div>
        <About />
      </div>
      <div className="container purp-text">
        <div className="col-3">
          <p className="h4" id="work">Work</p>
        </div>
        <div className="col-12 row purp-bg justify-content-between">

          <Project img={ipsumImg} imgAlt={'The title "Bio Ipsum" and some randomly generated text'} title={'Biological Jargon Lorum Ipsum'} deployLink={"https://ajlosey.github.io/Bio-Ipsum/"} repoLink={"https://github.com/AJLosey/Bio-Ipsum"} />

          <Project img={skynotesImg} imgAlt={"Buttons for generating music, followed by playlist images with links to listen to them"} title={'Skynotes'} deployLink={"https://mach2258.github.io/Weather-music/"} repoLink={"https://github.com/mach2258/Weather-music"} />

        </div>
        <div className="col-12 row purp-bg justify-content-between">

          <Project img={triviaImg} imgAlt={"The title 'Bio Ipsum' and some randomly generated text"} title={'Trivia Quiz Website'} deployLink={"https://triviabymmaac.herokuapp.com/"} repoLink={"https://github.com/AJLosey/trivia-database"} />

          <Project img={textImg} imgAlt={"A blue navigation bar above a black text field"} title={'Just Another Text Editor'} deployLink={"https://limitless-depths-34133.herokuapp.com/"} repoLink={"https://github.com/AJLosey/text-editor"} />

        </div>
        <div className="col-12 row purp-bg justify-content-between">

          <Project img={quizImg} imgAlt={"A timer, question, answers, and high scores option"} title={'Timed Code Quiz'} deployLink={"https://triviabymmaac.herokuapp.com/"} repoLink={"https://github.com/AJLosey/trivia-database"} />

          <Project img={noteImg} imgAlt={"A simple form for notes with some saved entries on the side"} title={'Note Taker'} deployLink={"https://ajlosey.github.io/code-quiz/"} repoLink={"https://github.com/AJLosey/code-quiz"} />

        </div>
      </div>

      <div className="container purp-text py-3">
        <div className="col-3">
          <p className="h4" id="contact-me">Contact Me</p>
        </div>
        <div className="purp-bg">
          <ul className="list-group">
            <li className="list-group-item purp-bg pl-5">Phone Number: 937-831-8424</li>
            <li className="list-group-item purp-bg pl-5">Email: aaronlosey11@hotmail.com</li>
            <li className="list-group-item purp-bg pl-5"><a href="https://github.com/AJLosey">Github Profile</a></li>
            <li className="list-group-item purp-bg pl-5"><a
              href="https://www.linkedin.com/in/aaron-losey-3b9a3b142/">Linkin
              Profile</a>
            </li>
          </ul>
        </div>
        <div className="col-12">

        </div>
      </div>
    </div>

  );
}

export default App;
