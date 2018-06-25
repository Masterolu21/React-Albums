import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
state = { albums: [] }; //sets up a default state called a class level property


  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState/*updates state*/({ albums: response.data }/*fetches objects within array*/));
  }
renderAlbums() {
  return this.state.albums.map(album => /*map is an array helper*/
    <AlbumDetail key={album.title} album={album} />
  );
}

  render() {
      console.log(this.state);
  return (
    <View>
      {this.renderAlbums()}
    </View>
  );
}
}
export default AlbumList;
