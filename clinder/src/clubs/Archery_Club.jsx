import React from 'react'
                            

    const $Archery_ClubPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Archery Club
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Sports
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                The purpose of Archery Club is to bring new athletic experiences to the University of Florida, to provide an excellent insight into the sport of archery, and to help students pursue these interests to a professional level if desired. Team building skills shall be learned and practiced while representing our team at a competitive level locally, regionally, nationally, and internationally.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Archery_ClubPage;
    