import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {

    const user = {
        id: 'ABC',
        name: 'Facundo',
    }
    
    test('debe de retornar el estado por defecto', () => {
        const initialState = {logged:false};
        const newState = authReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {

        const initialState = {logged:false};
    
        const action = {
            type: types.login,
            payload: user
        }

        const newState = authReducer(initialState, action);

        expect(newState.logged).toBeTruthy();
        expect(newState.user).toBe(user);

        
    });

    test('debe de (logout borrar el name del usuario y logged en false', () => {

        const initialState = {user, logged:true};

        const action = {
            type: types.logout,
        }

        const newState = authReducer(initialState, action);

        expect(newState).toEqual({logged:false})
    });
});