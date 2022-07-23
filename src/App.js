import React, { useState } from "react";
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import ipsumImg from './images/BioIpsum.png';
import codleImg from './images/Codle.png'
import quizImg from './images/coding-quiz.png';
import noteImg from './images/note-taker.png';
import skynotesImg from './images/Skynotes.png';
import textImg from './images/text-editor.png';
import triviaImg from './images/Trivia site.png';
import './App.css';

function App() {

  const [content, setContent] = useState('About');

  return (
    <div>
      <div>
        <Navbar setContent={setContent} />
      </div>

      {content === "About" && (
        <div>
          <About />
        </div>
      )}
      {content === "Work" && (
        <div className="container purp-text">
          <div className="col-3">
            <p className="h4" id="work">Work</p>
          </div>
          <div className="col-12 row purp-bg justify-content-between pt-3">

            <Project img={ipsumImg} imgAlt={'The title "Bio Ipsum" and some randomly generated text'} title={'Biological Jargon Lorum Ipsum'} deployLink={"https://ajlosey.github.io/Bio-Ipsum/"} repoLink={"https://github.com/AJLosey/Bio-Ipsum"} />

            <Project img={skynotesImg} imgAlt={"Buttons for generating music, followed by playlist images with links to listen to them"} title={'Skynotes'} deployLink={"https://mach2258.github.io/Weather-music/"} repoLink={"https://github.com/mach2258/Weather-music"} />

          </div>
          <div className="col-12 row purp-bg justify-content-between">

            <Project img={triviaImg} imgAlt={"The title 'Bio Ipsum' and some randomly generated text"} title={'Trivia Quiz Website'} deployLink={"https://triviabymmaac.herokuapp.com/"} repoLink={"https://github.com/AJLosey/trivia-database"} />

            <Project img={codleImg} imgAlt={"wordle but styled with a dark grey theme, and a test comment section"} title={'Codle'} deployLink={"https://codle-jsear.herokuapp.com/"} repoLink={"https://github.com/AJLosey/Codle-1"} />

          </div>
          <div className="col-12 row purp-bg justify-content-between">

            <Project img={quizImg} imgAlt={"A timer, question, answers, and high scores option"} title={'Timed Code Quiz'} deployLink={"https://ajlosey.github.io/code-quiz/"} repoLink={"https://github.com/AJLosey/code-quiz"} />

            <Project img={noteImg} imgAlt={"A simple form for notes with some saved entries on the side"} title={'Note Taker'} deployLink={"https://sleepy-harbor-45737.herokuapp.com/"} repoLink={"https://github.com/AJLosey/note-taker"} />

          </div>
        </div>
      )}

      {content === "Contact" && (
        <div>
          <Contact />
        </div>
      )}

    </div>

  );
}

export default App;
