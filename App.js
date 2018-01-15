import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import Header from './Header.js';
import Body from './Body.js';


export default class App extends React.Component {
	render() {
		return (
			<View style = {Styles.body}>
				<Header />
				<Body />
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	body:{
		flex: 1,
		backgroundColor: '#4D4D4D'
	}
});
