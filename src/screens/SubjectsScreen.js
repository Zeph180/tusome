import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { DataTable } from "react-native-paper";
import { useGlobalContext } from "../../GlobalContext";
import ProfileHeader from "../constants/ProfileHeader";
import RegistrationContainer from "../containers/RegistrationContainer";
import SchoolToolsSvg from "../../assets/vectors/SchoolToolsSvg";

const windowWidth = Dimensions.get("window").width;

const SubjectsTable = ({ subjects }) => {
	return (
		<DataTable style={styles.container}>
			<DataTable.Header style={styles.tableHeader}>
				<DataTable.Title>
					<Text style={styles.title}>No.</Text>
				</DataTable.Title>

				<DataTable.Title>
					<Text  style={styles.title}>Subjects</Text>
				</DataTable.Title>
			</DataTable.Header>
			{
				subjects.map((subject, i)=> {
					return (
						<DataTable.Row key={i}>
							<DataTable.Cell style={styles.cell}>{i+1}</DataTable.Cell>
							<DataTable.Cell style={styles.cell}>{subject}</DataTable.Cell>
						</DataTable.Row>

					);
				})
			}
		</DataTable>
	);
};

export default function SubjectsScreen({ navigation }) {
	const { user } = useGlobalContext();

	const handleGoBack = () => {
		navigation.goBack();
	};
	return (
		<RegistrationContainer
			header={
				<ProfileHeader 
					screenName="My Subjects"
					leftBtnPress={handleGoBack}
				/>
			}
		>
			<View>
				<SubjectsTable subjects={user.subjects}/>
			</View>
			<View style={{marginTop: "48%"}}>
				<SchoolToolsSvg />
			</View>
		</RegistrationContainer>
	);
}


const styles = StyleSheet.create({
	container: {
		margin: 10,
		width: windowWidth-20
	},
	tableHeader: {
		backgroundColor: "rgba(230, 239, 255, 1)",
		borderTopStartRadius: 10,
		borderTopEndRadius: 10
	},
	cell: {
		borderBottomWidth: 1,
		borderBottomColor: "rgba(219, 219, 219, 1)",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
		color: "black",
	}
});