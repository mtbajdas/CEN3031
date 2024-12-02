import React from 'react'
                            

    const $American_Meteorological_SocietyPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    American Meteorological Society
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Academic/Research-Liberal Arts and Sciences
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                The purpose of AMS Gator Chapter is to create an extracurricular engagement and networking space for students and faculty focused on meteorology. We connect students with opportunities and contacts on and off campus to help foster their interest and future paths in meteorology. Overall, we strive to make meteorology at UF exciting and engaging with social events and projects.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $American_Meteorological_SocietyPage;
    