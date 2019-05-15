import events from './events'

const initialState = {
  events
}

// Define constants
const ACTIONS = {
  MUTATE_EVENT: 'MUTATE_EVENT',
}

export const addEvent = ({date, title, description}) => {
  return (dispatch, getState) => {
    try {
      let events = { ...getState().appDuck.events }
      if (events[date]) {
        // date key is already exist, so prepend new event
        events[date] = [ {title, description},  ...events[date] ]
      } else {
        // Your adding new date, so create a new date key and append event
        events = { [date]: [{title, description}],  ...events }
      }
      dispatch({
        type: ACTIONS.MUTATE_EVENT,
        payload: events
      })
    } catch(err) {
      console.error(err)
    }
  }
}

export const removeEvent = ({date, idx}) => {
  return (dispatch, getState) => {
    try {
      let events = { ...getState().appDuck.events }
      events[date].splice(idx, 1)
      dispatch({
        type: ACTIONS.MUTATE_EVENT,
        payload: events
      })
    } catch(err) {
      console.error(err)
    }
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTIONS.MUTATE_EVENT: {
      return {
        ...state,
        events: payload
      }
    }

    default: {
      return state
    }
  }
}
