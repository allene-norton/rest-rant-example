const React = require('react')
const Default = require('../default')

function Show ({place}) {
  console.log(place)
    return (
      <Default>
        <h2>{place.name}</h2>
      </Default>
    )
}

module.exports = Show