import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/FireviewScreenStyles'

class FireviewScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 32}}>Fireview</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FireviewScreen)
