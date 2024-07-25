// import { Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import Typewriter from "./UI/Typewriter";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { NavLink } from "react-bootstrap";

import bannerSide2Img from "../assets/img/Frame.png";

const Banner = (props) => {
  return (
    <section className="banner" id="home">
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            id="banner-container"
            className={isVisible ? "animate__animated animate__fadeIn" : ""}
          >
            <div id="banner-side-1">
              <span className="tagline">Welcome to my portfolio!</span>
              <h1>
                {`Hi, I'm Tosin Balogun, `}
                <span className="wrap">
                  <Typewriter text="Software Engineer!" delay={200}>
                    {props.text}
                  </Typewriter>
                </span>
              </h1>
              <p>
                Experienced software developer with expertise in crafting
                engaging user interfaces using, React Native, React, and Next.JS
                with a strong focus on JavaScript. Proficient in Frontend
                development, mobile applications (IOS and Android), I seemingly
                integrate backend technologies and various databases, my history
                demonstrates a dedicated commitment to delivering high
                performance, innovative, scalable, optimized and secured
                solutions. I am very passionate about developing software that
                not only addresses user needs but also contributes to overall
                business success
              </p>
              <button>
                <NavLink href="#connect">
                  Let's connect
                  <ArrowRightCircle size={25} />
                </NavLink>
              </button>
            </div>

            <div id="banner-side-2">
              {/* </Col> */}
              {/* <Col xs={12} md={6} xl={12}> */}
              <img src={bannerSide2Img} alt="Header img" />
              {/* </Col>s */}
            </div>
            {/* </Row>
      </Container> */}
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default Banner;
