import React from 'react'
                            

    const $ChispasPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Chispas
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Community/Volunteer Service, Cultural
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                Chispas is the only student run organization at UF that focuses on immigrant right and immigrant advocacy. Our mission is to address the pressing needs and issues of the immigrant and migrant community through advocacy, service and awareness. We believe in an engaged student body that promotes equal rights, fair treatment, and the empowerment of the immigrant community.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $ChispasPage;
    