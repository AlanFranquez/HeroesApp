import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    // Hook de react router
    const navigate = useNavigate();


    const onLogout = () => {
        navigate('/login', {
            // Evita que la persona pueda regresar a la ventana anterior, remplaza el historial
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={(activo) => {
                            return `nav-item nav-link ${(activo.isActive) ? 'active' : null}`; 
                        }
                    }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => {
                            return `nav-item nav-link ${(isActive) ? 'active' : null}`
                        }}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => {
                            return `nav-item nav-link ${(isActive) ? 'active' : null}`
                        }}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-primary'>
                        Alan
                    </span>

                    <button className='nav-item nav-link btn btn-secondary' onClick={onLogout}>
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}