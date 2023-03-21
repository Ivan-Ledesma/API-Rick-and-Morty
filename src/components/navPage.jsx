import React from 'react'

function NavPage({ page, setPages, addList }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
    <button
      onClick={() => {
        const newPage = page + 1
        setPages(newPage)
        addList(newPage)
      }}
      className="btn btn-primary btn-sm "
    >Añadir personajes</button>
    <p>page : {page}</p>
  </div>
  )

}

export default NavPage