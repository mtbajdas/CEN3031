import React from 'react'
                            

    const $advntPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    advnt
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Academic/Research-Journalism and Communications
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                advnt is a student-run annual advertising portfolio publication. This organization prepares the creatively inclined for advertising careers in copywriting, illustration, graphic design, art direction, production, project management, and web design. We welcome anyone of any major, who is ready to join our creatives creating creativity, to apply.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $advntPage;
    