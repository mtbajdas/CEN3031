import React from 'react'
                            

    const $CS_KickstartPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    CS Kickstart
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Cultural
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                CS Kickstart (CSK) is established to provide more diversity and inclusivity to the Herbert Wertheim College of Engineering and UF as a whole. This program targets incoming UF students who are women that are interested in computer science, math, and/or engineering. CSK is going to be a multi-day introductory program for students to gain hands-on experience in programming and explore the creativity and power of computer science and engineering through technical workshops, industry speakers, and...
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $CS_KickstartPage;
    