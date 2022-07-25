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
import portImg from './images/Portfolio.png';
import workdayImg from './images/workday.png';
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

            <Project img={triviaImg} imgAlt={"landing page with buttons for login, signup, quiz categories, etc..."} title={'Trivia Quiz Website'} deployLink={"https://triviabymmaac.herokuapp.com/"} repoLink={"https://github.com/AJLosey/trivia-database"} />

            <Project img={codleImg} imgAlt={"wordle but styled with a dark grey theme, and a test comment section"} title={'Codle'} deployLink={"https://codle-jsear.herokuapp.com/"} repoLink={"https://github.com/AJLosey/Codle-1"} />

          </div>
          <div className="col-12 row purp-bg justify-content-between">

            <Project img={quizImg} imgAlt={"A timer, question, answers, and high scores option"} title={'Timed Code Quiz'} deployLink={"https://ajlosey.github.io/code-quiz/"} repoLink={"https://github.com/AJLosey/code-quiz"} />

            <Project img={noteImg} imgAlt={"A simple form for notes with some saved entries on the side"} title={'Note Taker'} deployLink={"https://sleepy-harbor-45737.herokuapp.com/"} repoLink={"https://github.com/AJLosey/note-taker"} />

          </div>

          <div className="col-12 row purp-bg justify-content-between">

            <Project img={portImg} imgAlt={"A portion of the about section of this website"} title={'This Portfolio'} deployLink={"https://ajlosey.github.io/Portfolio/"} repoLink={"https://github.com/AJLosey/Portfolio"} />

            <Project img={textImg} imgAlt={"a header and a black space"} title={'Text Editor'} deployLink={"https://limitless-depths-34133.herokuapp.com/"} repoLink={"https://github.com/AJLosey/text-editor"} />

          </div>

          <div className="col-12 row purp-bg justify-content-between">

            <Project img={workdayImg} imgAlt={"A header, followed by some time blocks with gibberesh saved in the first two"} title={'Scheduler'} deployLink={"https://ajlosey.github.io/Calendar-project/"} repoLink={"https://github.com/AJLosey/Calendar-project"} />

            <Card className="card col-5 purp-border">
              <div className="card-body">
                <p className="card-text h3">Undeployed Project Repos</p>
                <p className="card-text"><a href="https://github.com/AJLosey/E-commerce-back-end" target="_blank"
                  rel="noopener noreferrer">E-commerce Back-end</a></p><br></br>
                <p className="card-text"><a href="https://github.com/AJLosey/employee-tracker" target="_blank"
                  rel="noopener noreferrer">Employee Tracker</a></p><br></br>
                <p className="card-text"><a href="https://github.com/AJLosey/Team-Profile-Generator" target="_blank"
                  rel="noopener noreferrer">Team Profile Generator</a></p><br></br>
                <p className="card-text"><a href="https://github.com/AJLosey/Readme-generator" target="_blank"
                  rel="noopener noreferrer">Readme Generator</a></p><br></br>
              </div>
            </Card>

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
