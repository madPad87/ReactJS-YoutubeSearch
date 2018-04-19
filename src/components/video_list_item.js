import React from 'react';

//VideoListItem gets passed 2 parameters: the viceo and the function on VideoSelect()
const VideoListItem = ({video, onVideoSelect}) => {
    console.log(video);
        const imageUrl = video.snippet.thumbnails.default.url;

    return (
        //The user can click on this li (it's a link) and thereby select the video tht's been 
        //clicked (video)
      <li onClick={ () => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
        </div>
        <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
        </div>
      </li>  
    ) 
}

export default VideoListItem;