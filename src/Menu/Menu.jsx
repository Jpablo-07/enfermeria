import { Link } from "react-router-dom"
export function Menu(){
    return(
        <>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-black navbar-dark">
                <div class="container-fluid ">
                    <Link to="/" className="navbar-brand"><img src="https://firebasestorage.googleapis.com/v0/b/smmtienda-9dce6.appspot.com/o/logoDomifer.png?alt=media&token=a9dfb486-4a30-4cde-ac55-65e2fc0a4018" alt="logo" width="45" height="40" className="rounded"/></Link>                   
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/integrantes" className="nav-link">Miembros</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tienda" className="nav-link">Tienda</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/musica" className="nav-link" tabindex="-1" aria-disabled="true">Musica</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
    )
}