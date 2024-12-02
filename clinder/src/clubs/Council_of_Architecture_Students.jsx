import React from 'react'
                            

    const $Council_of_Architecture_StudentsPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Council of Architecture Students
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Academic/Research-Design, Construction, and Planning
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                To create a more equitable community of learners, to allow for more voices to contribute to the discourse, and to promote collaboration between students and faculty and staff, the Council of Architecture Students represents the ethics of the student body as it and the curriculum evolve to advance the educational mission of our profession.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Council_of_Architecture_StudentsPage;
    