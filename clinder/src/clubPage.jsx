import React from 'react'
import { useParams } from 'react-router-dom'
import ClubData from './clubsfile.json'
import ToggleClub from './ToggleClub'

const ClubPage = ({userId}) => {
    //grabbing the clubName from the address route.
    const clubName = useParams();

//Sorting through clubsfile.json to retrieve club information to populate page
const club = ClubData.find(item => item.Organization === clubName.clubid);

    return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-12">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    {club.Organization}
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    {club.Categories}
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                {club.Description}
            </p>
            <div className="flex justify-center mt-2">
                <ToggleClub clubName={club.Organization} userId = {userId} />
            </div>
        </div>
    )
}

export default ClubPage
