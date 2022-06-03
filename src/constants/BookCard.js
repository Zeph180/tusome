import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import { useGlobalContext } from "../../GlobalContext";
import CustomButton from "./CustomButton";



// export default function BookCard() {
    
// 	return (
// 		<View style={styles.container}>
// 			<View>
// 				<View style={styles.subjectContainer}>
// 					<Text style={styles.subject}>European History</Text>
// 				</View>
// 				<Text style={styles.bookName}>Peacock</Text>
// 				<Text style={styles.author}>Burrell Smith</Text>
// 				<View style={styles.publisherContainer}>
// 					<Text style={styles.publisher}>Mk Publishers</Text>
// 					<Text style={styles.publisher}>1996</Text>
// 				</View>
// 				<View style={styles.btnView}> 
// 					<CustomButton btnText="Read"/>
// 				</View>
// 			</View>
// 		</View>
// 	);
// }


// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		borderWidth: 3,
// 		borderColor: "#E1E3E8",
// 		borderRadius: 10,
// 		height: 150,
// 		margin: 10,
// 		justifyContent: "center",
// 	},
// 	subject: {
// 		color: "rgba(103, 137, 202, 1)",
// 		paddingLeft:10,
// 		fontSize: 15,
// 		fontWeight: "bold"
// 	},
// 	subjectContainer: {
// 		backgroundColor: "rgba(230, 239, 255, 1)",
// 		width: 148,
// 		height: 30,
// 		borderRadius: 10,
// 		justifyContent: "center",
// 	},
// 	bookName: {
// 		marginLeft: 10,
// 		fontWeight: "bold", 
// 	},
// 	author: {
// 		marginLeft: 10, 
// 	},
// 	publisher: {
// 		margin: 10
// 	},
// 	publisherContainer: {
// 		flexDirection: "row",
// 		justifyContent: "space-between"
// 	},
// 	btnView: {
// 		alignItems: "center"
// 	}
// });

export default function BookCard({ handleReadBtn }) {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.subjectContainer}>
					<Text style={styles.subject}>European History</Text>
				</View>
				<Text style={styles.bookName}>Peacock</Text>
				<Text style={styles.author}>Burrell Smith</Text>
				<View style={styles.publisherContainer}>
					<Text style={styles.publisher}>Mk Publishers</Text>
					<Text style={styles.publisher}>1996</Text>
				</View>
				<View style={styles.btnView}> 
					<CustomButton 
						btnText="Read"
						onPress={handleReadBtn}
					/>
				</View>
			</View>
		</View>
	);
}

BookCard.propTypes = {
	handleReadBtn: PropTypes.func,
	user: PropTypes.object
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 3,
		borderColor: "#E1E3E8",
		borderRadius: 10,
		height: 160,
		margin: 10,
		justifyContent: "center",
	},
	subject: {
		color: "rgba(103, 137, 202, 1)",
		paddingLeft:10,
		fontSize: 15,
		fontWeight: "bold"
	},
	subjectContainer: {
		backgroundColor: "rgba(230, 239, 255, 1)",
		width: 148,
		height: 30,
		borderRadius: 10,
		justifyContent: "center",
	},
	bookName: {
		marginLeft: 10,
		fontWeight: "bold", 
	},
	author: {
		marginLeft: 10, 
	},
	publisher: {
		margin: 10
	},
	publisherContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	btnView: {
		alignItems: "center",
	}
});