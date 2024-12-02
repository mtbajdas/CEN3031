import React from 'react'
                            

    const $CHI_PHIPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    CHI PHI
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Interfraternity Council
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                Dating back to 1824, Chi Phi has long striven to and succeeded in building young men who embody our core values of 'Truth, Honor, and Personal Integrity.' The Theta Delta Chapter of Chi Phi at the University of Florida embraces these values through our mission of building lifelong friendships, embracing leadership opportunities both within and outside of the organization, and developing men who exemplify good character.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $CHI_PHIPage;
    