import React from 'react'
                            

    const $Association_of_Computer_EngineersPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Association of Computer Engineers
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Academic/Research-Engineering
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                ACE plans, manages, and attends computer related projects, presentations, tutoring, mentoring, and special events hosted by the Computer & Information Science & Engineering (CISE) and the Electrical & Computer Engineering (ECE) Departments
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Association_of_Computer_EngineersPage;
    