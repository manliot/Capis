import React from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin';


export const loginWithGoogle = async () => {
    try {
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    } catch (error) {
        console.log(error)
    }
}

export const Logout = async () => {
    try {
        await auth().signOut()
    } catch (error) {
        console.log(error)
    }
}