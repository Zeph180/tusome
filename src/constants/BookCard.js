import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

export function BookCard({ handleReadBtn, subjectName, bookTitle, publisher, edition, author }) {
	return (
		<View style={styles.container}>
			<View style={{ marginLeft: 10 }}>
				<View style={styles.subjectContainer}>
					<Text style={styles.subject}>{subjectName}</Text>
				</View>
				<Text style={styles.bookName}>{bookTitle}</Text>
				<Text style={styles.author}>{author}</Text>
				<View style={styles.publisherContainer}>
					<Text style={styles.publisher}>{publisher}</Text>
					<Text style={styles.publisher}>{edition}</Text>
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

export default function BooksList({ books }) {
	
	return (
		<View>
			{
				books.map((book, i) => <BookCard 
					subjectName={book.subjectName}
					bookTitle={book.bookTitle}
					publisher={book.publisher}
					edition={book.edition}
					author={book.author}
					key={i}
				/>)
			}
		</View>
	);
}




BooksList.propTypes ={
	books: PropTypes.array,
};

BookCard.propTypes = {
	handleReadBtn: PropTypes.func,
	user: PropTypes.object,
	subjectName: PropTypes.string,
	bookTitle: PropTypes.string,
	publisher: PropTypes.string,
	edition: PropTypes.string,
	author: PropTypes.string
};

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
		height: 30,
		borderRadius: 10,
		justifyContent: "center",
		marginRight: 10,
	},
	bookName: {
		fontWeight: "bold", 
		marginTop: 8
	},
	publisherContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	btnView: {
		alignItems: "center",
		marginVertical:10
	}
});