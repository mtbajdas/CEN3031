import React from 'react'
                            

    const $Best_BuddiesPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Best Buddies
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Community/Volunteer Service
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                Best Buddies International is a nonprofit 501(c)(3) organization dedicated to establishing a global volunteer movement that creates opportunities for one-to-one friendships, integrated employment and leadership development for people with intellectual and developmental disabilities (IDD).
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Best_BuddiesPage;
    