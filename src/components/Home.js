import nike from '../image/nike.jpg'
import nike3 from '../image/nike3.jpg'
import nike5 from '../image/nike5.jpg'
import shoe from '../image/shoe.png'
import React, { useEffect } from "react";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.set(".a", { opacity: 0, y: 10 });
    gsap.set("#right > img", { opacity: 0, y: 10, scale: 0.3, rotate: 240 });

    const tl = gsap.timeline();

    tl.from("#left", {
      width: 0,
      duration: 1.5,
      ease: "expo.inOut",
    })
      .from("#right", {
        width: 0,
        duration: 1,
        ease: "expo.inOut",
      })
      .to(".a", {
        delay: -1.8,
        stagger: 0.1,
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "expo.inOut",
      })
      .to("#right > img", {
        delay: -1.5,
        opacity: 1,
        y: 0,
        rotate: -30,
        scale: 1,
        duration: 2,
        ease: "expo.inOut",
      });
  }, []);

  return (
    <div className="hero">
      {/* Left Section */}
      <div id="left">
        <div id="text">
          <h1 className="a">
            <span>Nike</span>
            <br />
            Lorem ipsum dolor.
          </h1>
          <h2 className="a">XYZ Series</h2>
          <p className="a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ratione fugiat ut dolores soluta possimus, expedita minus sunt
            laudantium ipsa voluptatem quidem! Qui totam voluptates quasi
            perferendis. Quisquam, tempore minima?
          </p>
          <button className="a">Check Out</button>
        </div>
        <div id="btm" className="a">
          <h3 className="a">Lorem, ipsum dolor.</h3>
          <p className="a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure
            praesentium id minima, tempora ducimus?
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div id="right">
        <img src={shoe} alt="shoe" />
        <div id="cntr">
          <h1 className="a">
           <span>Nike</span> Lorem, ipsum.
          </h1>
          <h2 className="a">
            Exclusively Built for <span>India</span>
          </h2>
          <p className="a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            magnam aspernatur aut quos quaerat iure nostrum, porro quia commodi
            dolorum nisi est consequuntur omnis vel sit labore ipsum rem
            officia!
          </p>
          <div id="btns">
            <button className="a">Check Out For The Products</button>
            <button className="av">
              View 360 <sup>o</sup>
            </button>
          </div>
          <h3 id="sampletext" className="a">Sample Images</h3>
          <div id="samples">
            <div className="sample">
              <img src={nike} alt="sample1" />
            </div>
            <div className="sample">
              <img src={nike3} alt="sample2" />
            </div>
            <div className="sample">
              <img src={nike5} alt="sample3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
