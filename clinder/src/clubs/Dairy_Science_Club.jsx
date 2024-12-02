import React from 'react'
                            

    const $Dairy_Science_ClubPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Dairy Science Club
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Academic/Research-Agricultural and Life Sciences
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                The Dairy Science Club (DSC) promotes involvement in the dairy industry at the local, regional, and national levels, allowing students to make connections to peers and industry representatives. Members have opportunities to attend and present at conferences, participate in intercollegiate competitions, attend farm tours with experts in the field, and promote a positive public perception of the dairy industry through community outreach and volunteerism.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Dairy_Science_ClubPage;
    