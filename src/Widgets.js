import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className="widgets">
            <h2>Widgets</h2>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type='text' />


            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happing</h2>

                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='cleverqazi'
                    options={{height: 400}}
                />

                <TwitterShareButton
                    url={'https://fb.com/cleverprogrammer'}
                    options={{text: '#react is awesome', via: ''}}
                />

            </div>
        </div>
    )
}

export default Widgets
