import React, { useState } from 'react';
import Modal from './Modal'
import './style.css';

export default function (props) {

  const { events, addEventToStore, removeEventFromStore } = props

  const [ showEventModal, setEventModal ] = useState(false)
  const [ showAddEventModal, setAddEventModal ] = useState(false)
  const [ newEventData, setNewEventData ] = useState({date: null, title: null, description: null})
  const [ event, setEvent ] = useState(null)

  const renderCalender = () => {
    const data = []
    for (let date = 1; date <= 31; date++) {
      data.push(
        <Cell
          events={events[date]}
          key={date}
          date={date}
          setAddEventModal={handleCurrentCellClick}
          removeEvent={removeEvent}
          showEvent={showEvent}
        />
      )
    }
    return data;
  }

  const handleCurrentCellClick = date => {
    setNewEventData({date, title: null, description: null})
    setAddEventModal(true)
  }

  const addEvent = () => {
    if (!newEventData.title || !newEventData.description) {
      return alert('Event title or description is empty')
    }
    addEventToStore(newEventData)
    setAddEventModal(false)
  }

  const showEvent = event => {
    setEventModal(true)
    setEvent(event)
  }

  const removeEvent = (date, idx) => {
    removeEventFromStore({date, idx})
  }

  return (
    <main className='Main'>
      <div className='calender-container'>
        {renderCalender()}
      </div>
      {
        showEventModal && (
          <Modal closeModal={() => setEventModal(false)}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </Modal>
        )
      }
      {
        showAddEventModal && (
          <Modal closeModal={() => setAddEventModal(false)}>
            <input autoFocus onChange={e => setNewEventData({...newEventData, title: e.target.value})} placeholder={'Event Title'} className='input' />
            <textarea onChange={e => setNewEventData({...newEventData, description: e.target.value})}  placeholder='Event Description' className='input'/>
            <button className='button-primary' onClick={addEvent} >Add Event</button>
          </Modal>
        )
      }
    </main>
  )
}

function Cell ({setAddEventModal, date, showEvent, removeEvent, events}) {
  const renderEvents = () => {
    return events && events.map((event, key) => (
      <Event
        key={key}
        idx={key}
        date={date}
        showEvent={showEvent}
        event={event}
        removeEvent={removeEvent}
      />
    ))
  }
  return (
    <div className='calender-cell-wrapper' onClick={() => setAddEventModal(date)}>
      <div className='date'>{date}</div>
      <div className='event-wrapper'>
        {renderEvents()}
      </div>
    </div>
  )
}

function Event ({ event, date, idx, showEvent, removeEvent }) {
  return (
    <div className='event' onClick={(e) => { e.stopPropagation(); showEvent(event) }}>
      <span className='event-title'>{event.title}</span>
      <span className='close' onClick={(e) => {e.stopPropagation(); removeEvent(date, idx)}}>X</span>
    </div>
  )
}