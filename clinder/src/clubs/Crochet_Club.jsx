import React from 'react'
                            

    const $Crochet_ClubPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Crochet Club
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Community/Volunteer Service
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                The Crochet club is for anyone who is interested in crocheting. Members will have the opportunity to learn how to crochet, and build upon their skills. Crocheting not only allows you to learn how to make clothing items, decoration, and art, but it also teaches hand skills and the ability to have patience in a craft. The Crochet Club will establish an environment for sharing ideas and skills, alongside building connections with peers who have...
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Crochet_ClubPage;
    