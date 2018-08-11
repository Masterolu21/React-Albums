import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
//allows us to get to redux and lets us call an action creator
import { CardSection } from './common';
import * as actions from '../actions';
//i put .. because

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if (library.id === selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
  /*if referencing to a javascript variable wrap in curly braceletss*/
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    console.log(this.props);
    const { id, title } = this.props.library;

    return (
  <TouchableWithoutFeedback
    onPress={() => this.props.selectLibrary(id)}
    >
    <View>
      <CardSection>
        <Text style={titleStyle}>
          {title}
        </Text>
      </CardSection>
      {this.renderDescription()}
    </View>
  </TouchableWithoutFeedback>
);
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }

};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};
export default connect(mapStateToProps, actions)(ListItem);
//because we don't have any maps state to props the first object is null
