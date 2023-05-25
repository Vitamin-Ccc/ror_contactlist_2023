import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListForm from './ListForm'
import ListShow from './ListShow'

const Lists = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    axios.get('/api/lists')
      .then(res => setLists(res.data))
      .catch(err => console.log(err))
  }, [])

  const addList = (list) => {
    axios.post('/api/lists', { list })
      .then(res => setLists([...lists, res.data]))
      .catch(err => console.log(err))
  }

  const updateList = (id, list) => {
    axios.put(`/api/lists/${id}`, { list })
      .then(res => {
        const newUpdatedList = lists.map((list) => {
          if (list.id === id) {
            return res.data
          }
          return list
        })
        setLists(newUpdatedList)
      })
      .catch(err => console.log(err))
  }

  const renderLists = () => {
    if (lists.length === 0) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>No lists</h1>
        </div>
      )
    }
    return (
      lists.map((list) => (
        <div key={list.id}>
          <h1>{list.lname}</h1>
          <p>{list.desc}</p>
          <button>Edit</button>
          <button>Delete</button>
          <button>Contacts</button>
        </div>
      ))
    )
  }

  return (
    <>
      <ListForm addList={addList} />
      <h1>All Lists</h1>
      {renderLists()}
    </>
  )
}

export default Lists