import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
const API_KEY = 'AIzaSyAypiJ6eVwaxjlLfcDdVjFX7JIj-H-zkkg';

// Create a new component. This component should produce some HTML.
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({ key: API_KEY, term: 'drake' }, videos => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo });
          }}
        />
      </div>
    );
  }
}

// Component needs to be inserted into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
