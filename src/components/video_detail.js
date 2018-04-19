import React from 'react';

const VideoDetail = ({video}) => {
    //So at first we see the loading sign because there is no video to see (it's null)
    if(!video) {
        return <div>Loading...</div>
    }
    //Now that there is data passed on to the VideoDetail component since the API has been loaded
    //The Video is displayed!
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${video.id}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
              <div>{video.snippet.title}</div>
              <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};
export default VideoDetail;