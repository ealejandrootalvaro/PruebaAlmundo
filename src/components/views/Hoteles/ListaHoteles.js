import React from 'react'
import styles from './ListaHoteles.css'
import hoteles from './data.json'


class ListaHoteles extends React.Component {

    constructor(props){
      super(props)

      this.state = {
        hoteles: hoteles
      }

    }

    renderHoteles(){
      const hoteles = this.state.hoteles;

      return hoteles.map((hotel) => {
        return (
          <div>

          <h1>hotel.name</h1>

          </div>
        )
      })

    }

    render(){

      const tagsHoteles = this.renderHoteles()

      return (

        {tagsHoteles}

      )

    }

}


export default ListaHoteles
