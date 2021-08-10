import {createContext, useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export function useAuthContext (){
    return useContext(AuthContext) }

function AuthContextProvider({children}) {
    const [ authState, setAuthState ] = useState([{
        user: null,
        status: 'pending',
        usernameUser: null,
    }])

    const history = useHistory();

    function isTokenValid() {
        const jwtToken = localStorage.getItem('token');
        if(!jwtToken) return false;
        const decodedToken = jwtDecode(jwtToken)
        const expirationUnix = decodedToken.exp;
        const now = new Date().getTime();
        const currentUnix = Math.round(now / 1000);

        const isTokenStillValid = expirationUnix - currentUnix > 0;
        return isTokenStillValid;
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!authState.user && isTokenValid()) {
            const decodedToken = jwtDecode(token);
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    },[]);


    async function login(jwtToken, result) {
        localStorage.setItem('token', result.data.jwt);
        const decodedToken = jwtDecode(jwtToken)
        console.log("Inloggen gelukt!")
        setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.username,
                    authority: result.data.authorityRole,
                },
                status: 'done',
            }
        )
        {result.data.authorityRole === "ROLE_USER" && history.push("/dashboard")||result.data.authorityRole === "ROLE_ADMIN" && history.push("/recepten")}
    }

    function logout() {
        localStorage.removeItem("token");
        setAuthState({user: null, status: "done"});
        history.push("/login");
    }

    const data = {
        ...authState,
        login: login,
        logout: logout,
        isTokenValid: isTokenValid
    };

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'pending'
                ? <p>We zijn bezig...</p>
                : children
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
