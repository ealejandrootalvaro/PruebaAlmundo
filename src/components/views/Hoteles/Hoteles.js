import React from 'react'

import FiltroHoteles from './FiltroHoteles'
import ListaHoteles from './ListaHoteles'

class Hoteles extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="row">
        <div className="col s4">
          <FiltroHoteles />
        </div>

        <div className="col s8">
          <ListaHoteles />
        </div>
      </div>
    )


  }


}

export default Hoteles
