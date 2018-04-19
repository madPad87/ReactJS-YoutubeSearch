import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD718la62IKk0yldrrJ9gZPG6tSjEiy3AI'



//create new component
//some HTML
class App extends Component {
    constructor(props) {
        super(props);

        //We set videos to an empty array and the selected video to null => no video displayed
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

        

    //Now we define a new method for making the search bar work. Term as argument
    //refers to whatever the user types in!
    videoSearch(term) {
        //API call gets completed (takes some time) and the array of videos is loaded
        //We set the selected video to be the first item in the array => New rendering further down here
        //YTSearch is a built in function!
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            });
        });
    }

    //At first: no data is passed on since API hasn't loaded,yet
    //2nd, now the data that is passed on to the Video Detail page is this selected (first one in the array)
    //this.state.selectedVideos causes the component to rerender (State always does!!)
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term), 3000} )

    return (
    <div>   
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
    </div>
    );
 }
}

//Take this component's generated html and 
//put it on the page
ReactDOM.render(<App />, document.querySelector(".container"));