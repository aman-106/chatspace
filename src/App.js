import React, { useState } from 'react';
import Header from './Header';
import SignIn from './SignIn';
import ChatSpace from './ChatSpace';
const defaultLoggedUser = { email: '' };

export default function App() {
    const [loggedUser, setLoggedUser] = useState(defaultLoggedUser);
    const [userEmail, setUserEmail] = useState('');
    const [loggedIn, setLogged] = useState(false);

    function handleSignInUser(e) {
        // fetch.post(`/handleSignInUser`);
        e.preventDefault();
        setLogged(true);
        setLoggedUser({ email: userEmail })
        return true;
    }
    return (
        <div>
            <Header loggedIn={loggedIn} loggedUser={loggedUser} />
            {loggedIn ? <ChatSpace loggedUser={loggedUser} /> : <SignIn setUserEmail={setUserEmail} userEmail={userEmail} handleSignInUser={handleSignInUser} />}
        </div>
    )
}
