import { useState } from "react"

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"





const firebaseConfig = {
    apiKey: "AIzaSyC0y4gNKc34uDtB_i_ZmcVZm0WkFSWQs-8",
    authDomain: "fb-auth-mk.firebaseapp.com",
    projectId: "fb-auth-mk",
    storageBucket: "fb-auth-mk.appspot.com",
    messagingSenderId: "671643716674",
    appId: "1:671643716674:web:fa9d354a8faf5ea8e6f1db"
};




export default function Signup({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignup = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        const response =
            await signInWithEmailAndPassword(auth, email, password)
                .catch(alert)
        setUser(response.user)
    }


    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <label htmlFor="email"> Email:{' '}
                    <input type="email" name="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="yourname@domain.com" />
                </label><br />
                <label htmlFor="password"> Password:{' '}
                    <input type="password" name="password"
                        value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="........." />
                </label><br />
                <button type="submit">Signup</button>
            </form>
        </>
    )
}