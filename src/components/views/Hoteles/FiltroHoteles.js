import React from 'react'
import styles from './FiltroHoteles.css'


class FiltroHoteles extends React.Component {

  constructor(props){

    super(props)

    this.state = {
      filtros : [
        {
          nombre: "nombre",
          activo: true
        },
        {
          nombre: "estrellas",
          activo: true
        }
      ]
    }

  }

  toogleFiltro(nombreFiltro){

    let filtros = this.state.filtros.slice()

    const filtroModificado = this.state.filtros.filter(filtro => filtro.nombre === nombreFiltro)[0];

    if(filtroModificado) {
      filtroModificado.activo = ! filtroModificado.activo
    }

    console.log(filtros)

    this.setState({filtros: filtros})

  }

  makeStars(number){

    return [...Array(number)].map(() => {

      return <i className="tiny material-icons star-icon">star</i>

    })

  }

  render (){

    const filtros = this.state.filtros

    const filtroNombre = this.state.filtros[0];
    const filtroEstrellas = this.state.filtros[1];

    const estrellasArray = Array(6).fill()

    return (
      <div className="hoteles-filtro-container">

        <div className="filtro">

        <h6 className="header">Filtros</h6>

        </div>


          <div className="filtro nombre">

          <header onClick={() => {this.toogleFiltro('nombre')}}>
            Nombre de hotel
          </header>

          {filtroNombre.activo &&

            <div className="row">

              <div className="col m8">
                <input type="text" placeholder="Nombre del Hotel"/>
              </div>

              <div className="col m4">
                <button className="indigo darken-2">Aceptar</button>
              </div>

            </div>

          }

        </div>

          <div className="filtro">

          <header onClick={() => {this.toogleFiltro('estrellas')}}>

            Estrellas

          </header>

          {filtroEstrellas.activo &&

            <div>

              <p>
                <input name="estrellas" id="estrellatodas" type="radio" />
                <label htmlFor="estrellatodas">Todas las estrellas</label>
              </p>

              {
                estrellasArray.map((_,i) => {

                  const index = 6-i;

                  if(i == 0){
                    return
                  }

                  return (
                    <p>
                      <input name="estrellas" id={"estrella"+index} type="radio" />
                      <label htmlFor={"estrella"+index}>
                        {
                          this.makeStars(index)
                        }
                      </label>
                    </p>
                  )

                })
              }

            </div>

          }

          </div>


      </div>
    )

  }

}

export default FiltroHoteles
