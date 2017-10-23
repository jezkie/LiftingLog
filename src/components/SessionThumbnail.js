import React from 'react';
import SessionItemList from './SessionItemList';

const SessionThumbnail = ({listOfSessions, handleEdit}) => {
  return (
    <SessionItemList listOfSessions={listOfSessions} handleEdit={handleEdit}/>
  )
}

export default SessionThumbnail;
