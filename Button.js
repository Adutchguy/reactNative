import React from 'react';
import {
	Alert,
	Button,
	StyleSheet,
	View,
} from 'react-native';

export default class Btn extends React.Component {
	constructor(props){
		super(props);
		this.state = {text: ''};
	}
	render() {
		return (
			<View style = {Styles.body}>
				<Button
					onPress={() => {
						Alert.alert('you pressed a button!');
					}}
					title='Submit'
					color='red'
				/>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	body:{
		width: '50%',
		backgroundColor: '#3D4D42'
	}
});
