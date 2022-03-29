import React, {useState} from 'react';
import "./Feed.css"
import Tweetbox from './Tweetbox'
import Post from './Post'
import Photo from './PassPhoto.jpg'
//import db from './firebase';
// import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);
    return (
        <div className="feed">
            {/* header */}
                <div className="feed__header">
                <h2>Post Home</h2>
                </div>
            {/* tweetbox */}

            <Tweetbox />
            
            {/* Post */}
            <Post
                displayName='Jignesh '
                username='Jigs78'
                verified={true}
                text='lets show it'
                avatar={Photo}
                image={Photo}
            />

        </div>
    )
}

export default Feed
