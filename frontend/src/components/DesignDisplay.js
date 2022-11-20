import React from 'react'
import styled from 'styled-components'
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'
import {useEffect, useState} from 'react'
import LikeDislike from './LikeDislike'

const DesignDisplay = ({url, id, likes, dislikes}) => {

    const [_likes, setLikes] = useState(likes)
    const [_dislikes, setDislikes] = useState(dislikes)


    const handleLike = async() => {
        setLikes((prevLikes) => (prevLikes + 1))
        const newlikes = (_likes+1)
        await fetch( `http://localhost:5000/api/updateDesign/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            likes: newlikes
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            // Handle data
        })
        .catch((err) => {
            console.log(err.message);
        });
        window.location.reload(false)
    }

    const handleDislike = async() => {
        setDislikes((prevDislikes) => (prevDislikes + 1))
        const newdislikes = (_dislikes+1)
        await fetch( `http://localhost:5000/api/updateDesign/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            dislikes: newdislikes
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            // Handle data
        })
        .catch((err) => {
            console.log(err.message);
        });
        window.location.reload(false)
    }

  return (
    <ParentContainer>
            <Image src={url} alt="" />
            <LikeDislike handleLike={handleLike} handleDislike={handleDislike} likes={likes} dislikes={dislikes} />
    </ParentContainer>
  )
}

const Image = styled.img`
    width: 100%;
    height:100%;
    border-radius: 12px;
    z-index: -1;
    
`

const ParentContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-between;
    justify-content:center;
    padding:10px;
`
const ButtonBox = styled.div`
    margin-top: 15px;
    display:flex;
    align-items:center;
    justify-content:space-around;

`

export default DesignDisplay