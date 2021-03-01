import React, { useEffect, useState } from "react";
import sanityClient from "../client";

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
    <main className="bg-gray-700 min-h-screen p-12">
     <h1 className="text-5xl text-gray-100 flex justify-center cursive">About me</h1>
        <h2 className="text-lg text-gray-100 flex justify-center mb-12">Welcome to my page about me as a Tech Entrepreneur</h2>
      <div className="py-6 lg:pt-1 container mx-auto relative">
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
