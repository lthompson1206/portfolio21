import React, { useEffect, useState } from "react";
import project from '../studio/schemas/project.js'
import sanityClient from '../client';

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            
            place,
            description,
            projectType,
            link,
            tags
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
<main className="bg-gray-700 min-h-screen p-12">
    <section className="container mx-auto">
        <h1 className="text-5xl text-gray-100 flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-100 flex justify-center mb-12">Welcome to my projects page!</h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData && projectData.map((project, index) => (
            <article className="relative w-70 p-12 m-8 bg-gray-900 text-center rounded-2xl text-white  shadow-xl border-white transform scale-125">
                <div class="flex-col -m-3.5 lg:px-0 sm:px-0">
  <div class="flex-auto ...">
  <h3 className="text-white-800 text-3xl font-bold mb-2 hover:text-green-500">
                    <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    >{project.title}</a>
                </h3>
  </div>
  <div class="flex-auto ...">
  <span className="text-xl font-semibold">
                        <strong className="font-bold">Company</strong>:{" "}
                        <span class="text-white">{project.place}</span>
                    </span>
  </div>
  <div class="flex-auto ...">
  <span>
                        <strong className="font-bold">Type</strong>:{" "}
                    </span>
                    <p className="My-8 text-md text-white leading-relaxed">
                        {project.description}
                    </p>
  </div>
  <div class="flex-auto pt-4">
  <a href={project.link}
                     rel="noopener noreferrer" 
                     target="_blank"
                     className="w-full p-2 mt-16  bg-blue-600  rounded-xl text-white"
                     >
                         <span class="font-medium">
                         View The Project{" "}
                         </span>
                         <span class="pl-2 material-icons align-middle text-sm">
                                    east
                                </span>
                       
                    </a>
  </div>
  
</div>
               
                
                <div className="text-gray-500 text-xs space-x-4">
                    
                    {/* <span>
                        <strong className="font-bold">Finished on</strong>:{" "}
                        {new Date(project.date).toLocaleDateString()}
                    </span> */}
                   

                   
                  
                    
                </div>
            </article>
            ))}
        </section>
        
    </section>
</main>
    )
}