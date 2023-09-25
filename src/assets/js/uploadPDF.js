export async function uploadPDF(file) {
	console.log("🚀 ~ file: uploadPDF.js:2 ~ uploadPDF ~ file:", file);
	const formData = new FormData();
	formData.append("pdfFile", file);
	const url = `https://taskguide.onrender.com/api/upload`
	// const url = `http://127.0.0.1:5000/api/upload`

	try {
		const response = await fetch(url, {
			method: "POST",
			body: formData,
		});

		if (response.ok) {
			console.log("PDF file uploaded successfully");
			return response.json();
		} else {
			console.log(response.text());
			console.error("Failed to upload PDF file");
		}
	} catch (error) {
		console.error("Error uploading PDF file:", error);
		throw Error;
	}
}
