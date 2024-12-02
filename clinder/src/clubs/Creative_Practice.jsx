import React from 'react'
                            

    const $Creative_PracticePage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Creative Practice
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Community/Volunteer Service
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                Creative Practice is a group composed of medical students and faculty who believe that artistic expression is a vital part of medical education. Our purpose is to promote artistic expression in any number of ways among students and faculty as a means of enriching our lives and those of the patients that we help care for. We believe that art and creative expression should be included among the many credentials of a doctor. Creative Practice...
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Creative_PracticePage;
    