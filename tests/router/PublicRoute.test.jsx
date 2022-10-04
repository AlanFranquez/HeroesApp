import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Pruebas en <PublicRoute />', () => {
    
    test('Debe de mostrar el children si no está autenticado', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext>
        );


        expect(screen.getByText('Ruta Publica')).toBeTruthy();
        screen.debug();

    });


    test('Debe de navegar si está autenticado', () => {
        
    });

});