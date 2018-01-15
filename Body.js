import React from 'react';
import {
	Text,
	TextInput,
	StyleSheet,
	View,
} from 'react-native';
import Btn from './Button.js';

export default class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {text: ''};
	}
	render() {
		return (
			<View style = {Styles.body}>
				<Text>Some Baller Ass Text</Text>
				<TextInput
					style={Styles.textInput}
					placeholder="Some text for the placeholder"
					onChangeText={(text) => this.setState({text})}
					onSubmitEditing={() => alert(this.state.text)}
				/>
				<Btn />
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	body:{
		width: '100%',
		height: '70%',
		borderWidth: 1,
		borderColor: 'red',
		backgroundColor: '#4D4545'
	},
	textInput:{
	}
});
