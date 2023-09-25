export async function getResponse(question) {
	try {
		const data = JSON.stringify({ question: question });
		// const url = `https://taskguide.onrender.com/api/question`;
		const url = `http://127.0.0.1:5000/api/question`;

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: data,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const responseData = await response.json();
		console.log(responseData);

		return responseData;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
}
