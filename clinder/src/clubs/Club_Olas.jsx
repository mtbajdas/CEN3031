import React from 'react'
                            

    const $Club_OlasPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Club Olas
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Cultural
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                Club Olas is established for the purpose of empowering and connecting students who are seeking to link their passion for Spanish language and culture with social justice. This organization will do so through club meetings, cultural celebrations, and fundraising events.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Club_OlasPage;
    