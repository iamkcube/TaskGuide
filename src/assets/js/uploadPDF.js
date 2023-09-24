export async function uploadPDF(file) {
	const formData = new FormData();
	formData.append("pdfFile", file);

	try {
		const response = await fetch("https://taskguide.onrender.com/api/upload", {
			method: "POST",
			body: formData,
		});

		if (response.ok) {
			console.log("PDF file uploaded successfully");
			return response.json()
		} else {
			console.log(response.text());
			console.error("Failed to upload PDF file");
		}
	} catch (error) {
		console.error("Error uploading PDF file:", error);
	}
}