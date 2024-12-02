import React from 'react'
                            

    const $Dance_MarathonPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Dance Marathon
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Community/Volunteer Service
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                Dance Marathon strives to bring together the campus and community to raise funds and awareness for the kids at UF Health Shands Children’s Hospital, our local Children’s Miracle Network Hospital.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Dance_MarathonPage;
    