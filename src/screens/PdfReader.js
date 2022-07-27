import React from "react";
import WebView from "react-native-webview";

export default function PdfReader() {
	return (
		<WebView 
			source={{ uri: "https://www.tutorialspoint.com/angles_lines_and_polygons/index.htm" }}
			// originWhitelist
			style={{ marginTop: 20 }}
		/>
	);
}
