
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";

const auth = getAuth(app);
export const SIGNUP = async () => {
    try {
        const {
            user: {refreshToken, providerData}
        } = await signInWithPopup(auth, GoogleAuthProvider)
        return {refreshToken, providerData}
    } catch (error) {
        console.log(error)
    }
}