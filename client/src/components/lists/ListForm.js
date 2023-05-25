import React, { useState } from 'react'

const ListForm = ({ addList }) => {
  const [list, setList] = useState({ lname: '', desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addList(list)
    setList({ lname: '', desc: '' })
  }

  return (
    <>
      <h1>Create List</h1>
      <form onSubmit={handleSubmit}>
        <label>List Name</label>
        <input
          name="name"
          value={list.lname}
          onChange={(e) => setList({ ...list, lname: e.target.value })}
          required
        />
        <textarea
          name="desc"
          value={list.desc}
          onChange={(e) => setList({ ...list, desc: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ListForm