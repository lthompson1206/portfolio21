import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import trapnerd from "../aboutbg.png";
import imageUrlBuilder from "@sanity/image-url";
// import Avatar from "../comp/avatar"
import Traits from '../comp/traits'
import Skills from '../comp/skills'
import BlockContent from "@sanity/block-content-to-react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";



const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
       }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading... </div>;
  return (
    <main className="bg-green-100 min-h-screen p-12">
      {/* <img src={trapnerd}
            alt="trapnerd"
            className="absolute w-full"
            /> */}
      <div className="p-8   lg:pt-48 container mx-auto relative">
        <section className="bg-gray-200 rounded-lg shadow-2xl lg:flex p-20">
          <div className="grid-cols-2">
              {/* <div><i class="fas fa-mountain #6DB65B fa-6x icon-a" style={{color: "blue"}}></i></div> */}
            <div>
              <Traits />
              {/* <h1 className="font-semibold">PERSISTENT & DETERMINED</h1>
              <p>Eyes always on the prize no matter the challenges</p> */}
            </div>
            {/* <div><h2>
              <Avatar />
              </h2></div> */}
            <div>
              {/* <Skills /> */}
              {/* <h1 className="font-semibold">BASIC CODING SKILLS</h1>
              <p>Knows how to build tech from fundamental coding languages</p> */}
            
            </div>
           {/* <div><i class="fas fa-laptop-code fa-6x" style={{color: "grey"}} ></i></div>
           <div><i class="fas fa-calendar-alt fa-6x"style={{color: "blue"}}></i></div>
            <div>
              <h1 className="font-semibold">PLANNER</h1>
              <p>Schedules & deadlines, but knows when to adjust</p>
            </div>
            <div></div>
            <div>
              <h1 className="font-semibold">WIREFRAMING</h1>
              <p>Ready to architect the next great digital experience</p>
            </div>
           <div><i class="fas fa-calculator fa-6x" style={{color: "grey"}} ></i></div>
           <div><i class="fas fa-dice-three fa-6x" style={{color: "blue"}}></i></div>
            <div>
              <h1 className="font-semibold">RISK TAKER</h1>
              <p>Not afraid to go all-in. Hope for the best but can deal with the worst</p>
            </div>
            <div></div>
            <div>
              <h1 className="font-semibold">CAN MAKE DATA-DRIVEN DECISIONS</h1>
              <p>Defers to the data over intuition whenever possible</p>
            </div>
           <div><i class="fas fa-circle fa-6x" style={{color: "grey"}}></i></div>
           <div><i class="fas fa-lightbulb fa-6x" style={{color: "blue"}}></i></div>
            <div>
              <h1 className="font-semibold">IMAGINATIVE</h1>
              <p>Thinks big from the beginning, Relishes challenging boundaries</p>
            </div>
            <div></div>
            <div>
              <h1 className="font-semibold">ACCOUNTING AND BOOKKEEPING</h1>
              <p>Meticulous, disciplined and organized when it comes to numbers</p>
            </div>
           <div><i class="fas fa-cloud fa-6x" style={{color: "grey"}}></i></div>
           <div><i class="fas fa-book fa-6x" style={{color: "blue"}}></i></div>
            <div>
              <h1 className="font-semibold">CRAVES LEARNING</h1>
              <p>I am always looking to change or evolve to stay ahead of the curve</p>
            </div>
            <div></div>
            <div>
              <h1 className="font-semibold">ARTICULATE COMMUNICATION</h1>
              <p>Always succeeds in being clear, no matter the audience</p>
            </div>
           <div><i class="fas fa-comments-dollar fa-6x" style={{color: "grey"}}></i></div>
           <div><i class="fas fa-desktop fa-6x" style={{color: "blue"}}></i></div>
            <div>
              <h1 className="font-semibold">SMART SELF-PROMOTER</h1>
              <p>Able to sell and tell my story. Enthusiastic.</p>
            </div>
            <div></div>
            <div>
              <h1 className="font-semibold">DIGITAL MARKETING</h1>
              <p>Knows implicitly that great products need great strategies</p>
            </div>
           <div><i class="fas fa-circle fa-6x" style={{color: "grey"}}></i></div>
           <div><i class="fas fa-circle fa-6x" style={{color: "blue"}}></i></div>
            <div>
              <h1 className="font-semibold">ACCEPTS FAILURE</h1>
              <p>Uses failure as a learning experience, then improves</p>
            </div>
            <div></div>
            <div>
              <h1 className="font-semibold">BUSINESS ADMIN AND PLANNING</h1>
              <p>Knows how to run a business top to bottom</p>
            </div >
            <div><i class="fas fa-building fa-6x" style={{color: "grey"}}></i></div> */}
           
          </div>
        </section>
      </div>
    </main>
  );
}
