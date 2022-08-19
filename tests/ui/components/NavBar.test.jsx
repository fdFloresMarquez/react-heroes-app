import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn();

//Hace un mock del react router dom y hace un spread de todos las funciones del mismo
//exceptuando el useNavigate que es el que nos interesa.
jest.mock ('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))


describe('Pruebas en <NavBar />', () => {

    const onLogoutMock = jest.fn();

    const contextValue = {
        logout: onLogoutMock,
        user: {
            id: 'ABC',
            name: 'Facundo'
        },
        logged: true,
    };

    beforeEach( () => jest.clearAllMocks);
    
    test('debe de mostrar el nombre del usuario logeado', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />  
                </MemoryRouter>
            </AuthContext.Provider>    
        )
        
        expect(screen.getByText('Facundo')).toBeTruthy();
    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton de logout', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />  
                </MemoryRouter>
            </AuthContext.Provider>    
        )

        const button = screen.getByRole('button');
        fireEvent.click(button)

        expect(onLogoutMock).toBeCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {replace:true});
    });
    
});