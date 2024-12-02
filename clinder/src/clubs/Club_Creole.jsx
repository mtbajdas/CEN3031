import React from 'react'
                            

    const $Club_CreolePage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Club Creole
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Cultural
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                The purpose of Club Creole is to promote the culture of the Haitian people, increase its awareness throughout the University and the State of Florida and to establish a strong positive image of the Haitian people.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Club_CreolePage;
    