const React = require('react')
const Default = require('../default')

function Show(data) {
  return (
    <Default>
      <h2>{data.place.name}</h2>
      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        Edit
      </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </Default>
  )
}

module.exports = Show