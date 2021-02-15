import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import trapnerd from "../aboutbg.png";
import imageUrlBuilder from "@sanity/image-url";
import Avatar from "../comp/avatar"
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
          <div className="mt-8 grid grid-cols-3">
              
            <div>
              <Traits />
            
            </div>
            <div><h2>
              <Avatar />
              </h2></div>
            <div>
              <Skills />
             
            
            </div>
          
           
          </div>
        </section>
      </div>
    </main>
  );
}
