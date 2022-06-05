import React from "react";

function Page() {
    return <body>
        <nav class="navbar">
            <div class="container-fluid">
                <span class="navbar-text">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-4">
                            <h1 class="h3">
                                Portfolio for Aaron Losey
                            </h1>
                        </div>
                        <div class="col-2">
                            <a href="https://drive.google.com/file/d/1_Sa2hdqHL4J_7zCmmWZPTEzb9DD15czZ/view?usp=sharing"
                                target="_blank" rel="noopener noreferrer">Resume Link</a>
                        </div>
                    </div>
                </span>
            </div>
        </nav>
        <div class="col-8 row justify-content-end version-box">

            A. Losey Version 2.7 now comes with ability to code!

        </div>
        <div class="container purp-text ">
            <div class="col-3">
                <p class="h4" id="about-me">About Me</p>
            </div>
            <div class="row purp-bg py-3">
                <div class="col-3"><img src="./images/photo2.jpg" alt="photo of me. It's 80% beard"
                    class="col-12 purp-border px-0"></div>
                <div class="col-9">
                    <p>I highly recommend that everyone listen to the 2016 album "Spirit Phone"
                        by Lemon Demon. There's a song called "Cabinet Man" about a living arcade machine that has two lines
                        that reference the game "Polybius". For those that don't know, Polybius is an equally fictional
                        arcade
                        machine allegedly deployed by some deep-government-psy-ops that drove people insane. "Lemon Demon,"
                        by
                        the
                        way, is a band with only one official member, the musical genius called Neil Cicierega. Another one
                        of
                        my favorite songs in the album is "Spiral of Ants". This masterpiece describes a real phenomenon
                        where
                        ants accidentally lay down guiding pheremones in a circle. Ants can get trapped in this circle,
                        following their own trails, and laying down more pheremones as they go. Other ants get sucked in,
                        the problem worsens, and eventually massive swarms can get caught up in this lethal feedback loop.
                        It's
                        insane, fascinating, and the song makes me think of the future of our own species. <br><br> Insect
                            patterns and video game
                            conspiracies are a pretty good summary of "about me," but for the record, I am a student in the
                            full-stack development bootcamp at
                            University of Texas. I
                            live in the South Austin
                            area. I enjoy javascript and c#, and have some familiarity with html, css, jquery, and bootstrap.
                            When
                            I'm not learning code, I'm either learning something about biology, learning about or playing video
                            games, writing, or I'm asleep. </p>
                        </div>
                </div>
            </div>

            <div class="container purp-text">
                <div class="col-3">
                    <p class="h4" id="work">Work</p>
                </div>
                <div class="col-12 row purp-bg justify-content-between">
                    <div class="card col-5 purp-border ">
                        <img src="./images/BioIpsum.png" class="card-img-top"
                            alt="The title 'Bio Ipsum' and some randomly generated text">
                            <div class="card-body">
                                <p class="card-text h3">Biological Jargon Lorum Ipsum</p>
                                <p class="card-text"><a href="https://ajlosey.github.io/Bio-Ipsum/" target="_blank"
                                    rel="noopener noreferrer">Link to page</a><br><a href="https://github.com/AJLosey/Bio-Ipsum"
                                        target="_blank" rel="noopener noreferrer">Link to github repository</a></p>
                            </div>
                    </div>
                    <div class="card col-5 purp-border">
                        <img src="./images/Skynotes.png" class="card-img-top"
                            alt="Buttons for generating music, followed by playlist images with links to listen to them">
                            <div class="card-body">
                                <p class="card-text h3">Skynotes</p>
                                <p class="card-text"><a href="https://mach2258.github.io/Weather-music/" target="_blank"
                                    rel="noopener noreferrer">Link to page</a><br><a
                                        href="https://github.com/mach2258/Weather-music" target="_blank"
                                        rel="noopener noreferrer">Link to github repository</a></p>
                            </div>
                    </div>
                </div>
                <div class="col-12 row purp-bg justify-content-center">
                    <div class="card col-5 purp-border ">
                        <img src="./images/Trivia site.png" class="card-img-top"
                            alt="The title 'Bio Ipsum' and some randomly generated text">
                            <div class="card-body">
                                <p class="card-text h3">Trivia Quiz Website</p>
                                <p class="card-text"><a href="https://triviabymmaac.herokuapp.com/" target="_blank"
                                    rel="noopener noreferrer">Link to page</a><br><a
                                        href="https://github.com/AJLosey/trivia-database" target="_blank"
                                        rel="noopener noreferrer">Link to github repository</a></p>
                            </div>
                    </div>
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
        </div>

    </body>
}