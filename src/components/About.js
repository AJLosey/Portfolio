import React from 'react';
import photo from '../images/profile-photo.png'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export function About() {
    return (
        <Container className={"purp-text"}>
            <Col xs={3}>
                <p className="h4" id="about-me">About Me</p>
            </Col>
            <div className="row purp-bg py-3">
                <div className="col-3"><img src={photo} alt="photo of me. It's 80% beard"
                    className="col-12 purp-border px-0" /></div>
                <div className="col-9">
                    <p>I highly recommend that everyone listen to the 2016 album "Spirit Phone"
                        by Lemon Demon. There's a song called "Cabinet Man" about a living arcade machine that has two lines
                        that reference the game "Polybius". For those that don't know, Polybius is an equally fictional
                        arcade
                        machine allegedly deployed by some deep-government-psy-ops that drove people crazy. "Lemon Demon,"
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
                        insane, fascinating, and the song makes me think of the future of our own species. <br></br> As for more official information about myself, I am a student in the
                        full-stack development bootcamp at
                        University of Texas. I
                        live in the South Austin
                        area. I enjoy JavaScript and C#, and have training with HTML, CSS, React, jQuery, Bootstrap, Express, MySQL, MongoDB, and Apollo.
                        When
                        I'm not learning code, I'm either learning something about biology, learning about or playing video
                        games, writing, or I'm asleep. </p>
                </div>
            </div>
        </Container>
    )
}