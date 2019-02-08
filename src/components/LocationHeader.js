import React from 'react'

export default props => (
  <h2 className="locationHeader" >
    { props.location && props.location }
    { props.country ? ', ' + props.country.toUpperCase() : '' }
  </h2>
);
