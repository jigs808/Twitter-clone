import React, {useState} from 'react'
import './Tweetbox.css'
import { Avatar, Button } from "@material-ui/core"
import Photo from './PassPhoto.jpg'

function Tweetbox() {

    const [tweetMessage, settweetMessage] = useState('')
    const [tweetImage, settweetImage] = useState()
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src={Photo} />
                    
                    <input
                        onChange={e => settweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening" type='text' />
                    
                </div>
                <input
                     onChange={e => settweetImage(e.target.value)}
                     value={tweetImage}
                    className='tweetBox__imageInput' placeholder="Enter Img url" type='text' />
                <Button type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
