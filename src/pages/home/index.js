import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import './style.css'


import './style.css'

const Home = () => {
    const [getData, setGetData] = useState([])
    const url = 'http://hp-api.herokuapp.com/api/characters'

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setGetData(data)
        })

    },[])

    const card = getData.map((infos, index) => {
        return(
            <div key={index}>
                <Avatar src={infos.image} />
            </div>
        )
    })
    
    return(
        <div className="home-container">
            {card}
        </div>
    )
}

export default Home