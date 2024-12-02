import React from 'react'
                            

    const $Club_PickleballPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Club Pickleball
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Sports
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                UF Club Pickleball’s primary purpose is to provide students with an outlet to learn more about the sport of pickleball, regardless of experience, and to create connections between the different colleges of the University of Florida. UF Club Pickleball will host a variety of events, meetings, and workshops for members to engage with each other and campus. UF Club Pickleball will also put on intercollegiate events throughout the year to provide members with an...
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Club_PickleballPage;
    