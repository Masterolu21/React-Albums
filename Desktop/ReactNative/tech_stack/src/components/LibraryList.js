import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
    /* ds is dataSource and it takes this list of libraries to render the screen*/
    /*everything from roww 8 to row 14 is copy/pastable*/
}
  renderRow(library){
    /*returns a single library*/
    return <ListItem library={library} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => {
/*to take our application state and take some properties
and provide them as props*/
  return { libraries: state.libraries };
    /*reference to array of libraries*/
};

export default connect(mapStateToProps)(LibraryList);
/* calls the function connect and when connect is called
 it returns another function. Then immediately call that return function with
 the library list */
