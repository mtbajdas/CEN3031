import React from 'react'
                            

    const $Bowling_ClubPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Bowling Club
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Sports
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                The purpose of this organization is for UF students to be able to practice bowling together, help each other improve, and meet new peers. This organization will also provide as a team for those interested in competing at tournaments.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Bowling_ClubPage;
    