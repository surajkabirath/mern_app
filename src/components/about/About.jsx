import React from 'react'
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/PhotoFunia-1643622236.jpg"
const About = () => {
  return (
    <section className="about">
      <main className='about_detail'>
        <h1>About Us</h1>

        <article>
          <h4>Food Darbar</h4>
          <p>
            We are Food Darbar. The place for most tasty Foods on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="founder" />
              <h3>Suraj kabirath</h3>
            </div>

            <p>
              I am Suraj Kabirath, the founder of Food Darbar. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  )
}

export default About