import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/videos/VideoSearch'
import { useParams } from 'react-router-dom'
import {fetchFromAPI} from '../components/utils/api'

const Search = () => {
    const {searchId} = useParams()
    const [videos, setVideos] = useState([])
    const [nextPageToken,setNextPageToken] = useState(null)

    useEffect(()=>{
        setVideos([])
        fetchVideos(searchId)
    },[searchId])

    const fetchVideos = (query, pageToken='')=>{
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
        .then((data)=>{
            setNextPageToken(data.nextPageToken)
            setVideos((prevVideos)=>[...prevVideos,...data.items])
        })
        .catch((error)=>{
            console.error(`Error fetching data:`.error)
        })
    }

    const handelLoadMore = () =>{
        if(nextPageToken){
            fetchVideos(searchId,nextPageToken)
        }
    }

    return (
        <Main    
            title = "유투브 검색" 
            description="유튜브 검색 결과 페이지입니다.">

            <section id='searchPage'>
                <h2><em>{searchId}</em>검색 결과입니다.</h2>
                <div className='video_inner search'>
                    <VideoSearch videos={videos}/>
                </div>
                <div className='video_more'>
                    {nextPageToken&&(
                        <button onClick={handelLoadMore}>더보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search