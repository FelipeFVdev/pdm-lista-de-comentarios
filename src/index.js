import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import faker from 'faker'
import comentario from './comentario'
import cartao from './cartao'
import ListaComentarios from './ListaComentarios'
import Feedback from './Feedback'
const App = () => {
        const textoOK = "Aprovar"
        const textoNOK = "Não Aprovar"
        const funcaoOK = () =>
    return (
        <ListaComentarios>
            <div className="row">
                <div className="col-12">
                    <cartao>
                        <comentario nome={faker.name.findName()} texto={faker.lorem.sentences()} data={faker.date.recent().toLocaleDateString}
                        foto={faker.image.avatar()}/>
                    </cartao>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <cartao>
                        <comentario nome={faker.name.findName()} texto={faker.lorem.sentences()} data={faker.date.recent().toLocaleDateString}
                        foto={faker.image.avatar()}/>
                    </cartao>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <cartao>
                        <comentario nome={faker.name.findName()} texto={faker.lorem.sentences()} data={faker.date.recent().toLocaleDateString}
                        foto={faker.image.avatar()}/>
                    </cartao>
                </div>
            </div>
        </ListaComentarios>
        
         
    )
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)