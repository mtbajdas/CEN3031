import React from 'react'
                            

    const $AeroGatorPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    AeroGator
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Academic/Research-Engineering
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                AeroGator is established for the purpose of providing students the opportunity to develop the skills needed to excel in the aerospace industry. This is done by pursuing an aircraft design project and applying skills learned in the classroom to real life applications. The team’s goals include being capable of optimizing aircraft performance, functioning in a fluid group dynamic, providing opportunities to learn new skills, and promoting confidence within incoming engineers to excel in their future...
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $AeroGatorPage;
    