import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import deviceStorage from '../common/deviceStorage2'


class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }
    
    _bootstrapAsync = async () => {
        deviceStorage.get('userInfo').then(res => {
            this.props.navigation.navigate(Boolean(res) ? 'App' : 'Auth');
        })
    };
    
    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen
