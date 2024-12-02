import React from 'react'
                            

    const $Club_Field_HockeyPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Club Field Hockey
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Sports
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                We are the Club Field Hockey team at the University of Florida. We welcome all UF undergraduate and graduate students and staff to join our team. No prior field hockey experience is necessary! We have weekly practices and compete in tournaments against other colleges and universities multiple times a semester. We also participate in community service, fundraising, and team bonding activities. If interested, please reach out to our president!
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Club_Field_HockeyPage;
    