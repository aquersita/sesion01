import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const NavBar = () => {
    const { user, logout } = useAuth();
    return (
        <div className="nav">
            <div className="flex items-center gap-4">
                {""}
                <Link to="/">
                    <span className="font-bold text-white text-3xl">🌎 Curso de React 2026</span>
                </Link>
            </div>
            <div className="flex items-center gap-3">
                {user ? (
                    <>
                        <Link to="/dashboard" className="font-white">
                            Mi panel
                        </Link>
                        <button onClick={logout}>
                            Cerrar Sesion
                        </button>
                    </>
                ) : (
                    <>
                    <Link to="/login" className="btn btn-primary btn-sm">Iniciar Sesion</Link>
                    </>
                )}

            </div>
        </div>

    )
}

export default NavBar