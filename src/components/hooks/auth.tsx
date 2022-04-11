import React, { createContext, useState, useContext } from 'react';

interface IAuthProps{
    logged: boolean,
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthCotext = createContext<IAuthProps>({} as IAuthProps);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira:logged')
        
        return!!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if(email === 'martins.cjhon@gmail.com' && password === '123'){
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        } else{
            alert("Senha ou usuário incorreto!");
        }
    }

    const signOut = () => {
        localStorage.removeItem('@minha-carteira:logged');
        setLogged(false);
    }

    return (
        <AuthCotext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthCotext.Provider>        
    )
}

function useAuth(): IAuthProps{
    const context = useContext(AuthCotext);

    return context;
}

export { AuthProvider, useAuth }