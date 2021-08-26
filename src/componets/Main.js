import { Link } from "react-router-dom"

export const Main = () =>{
    return (
        <main className="container">
            <div className="">
                <h3>Gestionar reclamaciones</h3>
                <Link to="/claims" className="btn btn-outline-success" role="button">Solicitud de información  &raquo;</Link>
            </div>

        </main>
    )
}