import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export async function logoutUser() {
	try {
		const userCredential = await signOut(auth);
		console.log("🚀 ~ file: logout.js:7 ~ signoutUser ~ userCredential:", userCredential)
		return userCredential;
	} catch (error) {
		const errorCode = error.code;
		console.error(
			"🚀 ~ file: signup.js:16 ~ signupUser ~ errorCode:",
			errorCode
		);
		const errorMessage = error.message;
		console.error(
			"🚀 ~ file: signup.js:18 ~ signupUser ~ errorMessage:",
			errorMessage
		);
		throw error;
	}
}
