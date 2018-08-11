import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';

import { connect } from 'react-redux';
//allows us to get to redux and lets us call an action creator
import { CardSection } from './common';
import * as actions from '../actions';
//i put .. because
class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
      <CardSection>
        <Text style={{ flex: 1 }}>{library.description}</Text>
      </CardSection>
  /*if referencing to a javascript variable wrap in curly braceletss*/
      );
    }
  }
  render() {
    const { titleStyle } = styles;
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

const mapStateToProps = (state, ownProps) => {
/* removes logic from main component */
const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);
//because we don't have any maps state to props the first object is null
