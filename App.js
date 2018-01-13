import React from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style = {Styles.header}>
				<Image
					style = {Styles.headerImage}
					source = {
						require('./resources/imgs/cover.jpg')
					}
					resizeMethod = 'resize'
				/>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	header:{
		height: 150,
		width: 350
	},
	headerImage:{
		flex: 1
	}
});
