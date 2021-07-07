import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import Api from '../api/api'
import Http from "../common/httpRequestPromise";
import deviceStorage from "../common/deviceStorage2";


export default class FriendPage extends Component {
    state = {
        account: '',
        password: ''
    };
    
    // 点击登录按钮
    _loginFunc = () => {
        if (this.state.account == '' || this.state.password == '') {
            Alert.alert(
                '提示',
                '请输入账号、密码',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
            )
            return false
        }
        Http.ajax({
            url: Api.loginUrl,
            params: {
                account: this.state.account,
                password: this.state.password
            }
        }).then(res => {
            if (Number(res.code) < 0) {
                Alert.alert(
                    '提示',
                    res.message,
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false}
                )
            } else {
                // 将个人信息本地保存
                deviceStorage.save('userInfo', res.data)
        
                this.props.navigation.navigate('App')
            }
        })
    };

    _goToRegister = () => {
        this.props.navigation.navigate('Register')
    };
    
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.container}>
                    <Input
                        value={this.state.account}
                        onChangeText={(account) => this.setState({account})}
                        containerStyle={styles.inputCon}
                        inputContainerStyle={styles.input}
                        placeholder='请输入用户名'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='#00aced'
                                style={styles.icon}
                            />
                        }
                    />
                    <Input
                        value={this.state.password}
                        onChangeText={(text) => {this.setState({password: text})}}
                        secureTextEntry={true}
                        containerStyle={styles.inputCon}
                        inputContainerStyle={styles.input}
                        placeholder='请输入密码'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='#00aced'
                                style={styles.icon}
                            />
                        }
                    />
                    
                    <Button
                        containerStyle={styles.loginBtnCon}
                        buttonStyle={styles.loginBtn}
                        onPress={this._loginFunc}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={30}
                                color="white"
                            />
                        }
                    />
                </View>
                
                <View style={styles.registerDiv}>
                    <Text
                        onPress={this._goToRegister}
                        style={styles.registerBtn}>
                        新用户注册
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    },
    inputCon: {
        width: '80%',
        marginTop: 20,
    },
    input: {
        padding: 8,
        paddingRight: 20,
        borderRadius: 30,
        borderBottomWidth: 0,
        backgroundColor: '#f5f5f5',
    },
    icon: {
        paddingRight: 15
    },
    loginBtnCon: {
        marginTop: 30,
    },
    loginBtn: {
        backgroundColor: '#00aced',
        width: 60,
        height: 60,
        borderRadius: 30,
        padding: 15
    },
    registerDiv: {
        height: 50,
    },
    registerBtn: {
        textAlign: 'center'
    }
});
