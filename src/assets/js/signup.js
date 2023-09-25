import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export async function signupUser(email, password) {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;
		console.log("🚀 ~ file: signup.js:10 ~ .then ~ user:", user);
		return user; 
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
