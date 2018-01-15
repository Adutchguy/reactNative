import React from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';

export default class Header extends React.Component {
	render() {
		return (
			<View style = {Styles.header}>
				<Image
					style = {Styles.headerImage}
					source = {require('./resources/imgs/cover.jpg')}
					resizeMode = 'stretch'
					resizeMethod = 'scale'
				/>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	header:{
		height: '30%',
		width: '100%'
	},
	headerImage:{
		height: '100%',
		width: '100%'
	}
});
