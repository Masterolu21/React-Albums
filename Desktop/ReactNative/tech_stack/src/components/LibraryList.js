import React, { Component } from 'react';
import { ListView } from'react-native';
import { connect } from 'react-redux';


class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
    /* ds is dataSource and it takes this list of libraries to render the screen*/
}
  renderRow(){

  }

  redner() {
    return (
      <ListView

        dataSource={this.dataSource}
        rednerRow={this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => {
/*to take our application state and take some properties
and provide them as props*/
  return { libraries: state.libraries };
    /*reference to array of libraries*/
  console.log(state);
};

export default connect(mapStateToProps)(LibraryList);
/* calls the function connect and when connect is called
 it returns another function. Then immediately call that return function with
 the library list */
