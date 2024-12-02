import React from 'react'
                            

    const $Camp_KesemPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Camp Kesem
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Community/Volunteer Service
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                Camp Kesem's purpose is to support children through and beyond their parent’s cancer. By offering free, week-long summer camps and year-round support, Camp Kesem provides a safe and supportive community where kids can connect with peers who understand what they’re going through, helping them build resilience, gain confidence, and experience the joy of childhood despite the challenges they face at home. The organization is driven by the belief that no child should have to face...
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Camp_KesemPage;
    