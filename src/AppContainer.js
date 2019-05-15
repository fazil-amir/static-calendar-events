import AppComponent from './AppComponent'

import { connect } from 'react-redux'

import { addEvent, removeEvent } from './appDuck'

// Map props
const mapStateToProps = state => ({
  events: state.appDuck.events
})


const mapDispatchToProps = dispatch => ({
  addEventToStore: params => dispatch(addEvent(params)),
  removeEventFromStore: params => dispatch(removeEvent(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
