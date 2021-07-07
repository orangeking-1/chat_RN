import React, {Component} from 'react';
import deviceStorage from '../common/deviceStorage2'
import { Header, Avatar, ListItem, Overlay, Input, Button, Icon } from 'react-native-elements'

import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Api from '../api/api'
import Http from "../common/httpRequestPromise";


export default class FriendPage extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        userInfo: {
            'email': '',
            'avatar': '',
            'profile': '',
            'created_time': '',
            'update_time': '',
            'location': '',
            'admin': '',
            'account': '',
            'password': '',
        },
        changeIsVisible: false,
        changeInfoText: '',
        changeInfoKey: '',
        changePasswordVisible: false,
        oldPasswordText: '',
        newPasswordText: '',
        againPasswordText: '',
    
    }
    
    // 从本地存储获取个人信息
    componentWillMount(): void {
        deviceStorage.get('userInfo').then(res => {
            this.setState({
                userInfo: res
            })
        })
    }
    
    logoutFunc = () => {
        deviceStorage.delete('userInfo');
        this.props.navigation.navigate('Login');
    }
    
    // 更改信息
    changeInfoFunc = infoKey => {
        this.setState({
            changeIsVisible: true,
            changeInfoKey: infoKey
        })
    }
    finishInputFunc= event => {
        // console.log(event.nativeEvent.text);
        let infoKey = this.state.changeInfoKey;
        let userInfo = Object.assign({}, this.state.userInfo);
        userInfo[infoKey] = event.nativeEvent.text
        Http.ajax({
            url: Api.updateUserInfo,
            params: {
                userInfo
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
                let changedUserInfo = res.data
                this.setState({
                    userInfo: changedUserInfo,
                    changeIsVisible: false,
                    changeInfoText: ''
                })
                // 将个人信息本地保存
                deviceStorage.save('userInfo', res.data)
            }
        })
        
    }
    
    
    // 更换头像
    changeAvatarFunc = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }
    
    
    // 更新密码
    openPasswordDivFunc = () => {
        this.setState({
            changePasswordVisible: true
        })
    }
    changePasswordFunc = () => {
        if (this.state.userInfo.password !== this.state.oldPasswordText) {
            Alert.alert(
                '提示',
                '旧密码有误',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
            )
            return false
        }
        if (this.state.newPasswordText === '' || this.state.againPasswordText === '') {
            Alert.alert(
                '提示',
                '新密码不能为空',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
            )
            return false
        }
        if (this.state.newPasswordText !== this.state.againPasswordText) {
            Alert.alert(
                '提示',
                '两次输入密码不一致',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
            )
            return false
        }
    
        let userInfo = Object.assign({}, this.state.userInfo);
        userInfo['password'] = this.state.newPasswordText
        Http.ajax({
            url: Api.updateUserInfo,
            params: {
                userInfo
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
                let changedUserInfo = res.data
                this.setState({
                    userInfo: changedUserInfo,
                    changePasswordVisible: false,
                    oldPasswordText: '',
                    newPasswordText: '',
                    againPasswordText: '',
                })
                // 将个人信息本地保存
                deviceStorage.save('userInfo', res.data)
            }
        })
        
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: '个人中心', style: { color: '#fff', fontSize: 18 } }}
                    containerStyle={styles.headerStyleObj}
                />
                <ScrollView alwaysBounceVertical={true}>
                    <View style={styles.avatarCon}>
                        <Avatar
                            size="large"
                            title="头像"
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                            }}
                            showEditButton
                            onPress={this.changeAvatarFunc}
                        />
                    </View>
                    <View>
                        <View style={styles.infoItem}>
                            <ListItem
                                Component={TouchableScale}
                                friction={30}
                                tension={100}
                                activeScale={0.95}
                                title={(
                                    <View style={styles.infoDivCon}>
                                        <Text style={styles.infoDivTip}>账号：</Text>
                                        <Text style={styles.infoDiv}>{this.state.userInfo.account}</Text>
                                    </View>)}
                                containerStyle={styles.accountItem}
                                chevron={{ color: 'white' }}
                                onPress={this.changeInfoFunc.bind(this, 'account')}
                            />
                        </View>
                        <View style={styles.infoItem}>
                            <ListItem
                                Component={TouchableScale}
                                friction={30}
                                tension={100}
                                activeScale={0.95}
                                title={(
                                    <View style={styles.infoDivCon}>
                                        <Text style={styles.infoDivTip}>签名：</Text>
                                        <Text style={styles.infoDiv}>{this.state.userInfo.profile.length > 0 ? this.state.userInfo.profile : '小懒蛋，你还没有写呢！'}</Text>
                                    </View>)}
                                containerStyle={styles.profileItem}
                                chevron={{ color: 'white' }}
                                onPress={this.changeInfoFunc.bind(this, 'profile')}
                            />
                        </View>
                        <View style={styles.infoItem}>
                            <ListItem
                                Component={TouchableScale}
                                friction={30}
                                tension={100}
                                activeScale={0.95}
                                title={(
                                    <View style={styles.infoDivCon}>
                                        <Text style={styles.infoDivTip}>位置：</Text>
                                        <Text style={styles.infoDiv}>{this.state.userInfo.location.length > 0 ? this.state.userInfo.location : '抱歉！未获取成功'}</Text>
                                    </View>)}
                                containerStyle={styles.locationItem}
                                chevron={{ color: 'white' }}
                                onPress={this.changeInfoFunc.bind(this, 'location')}
                            />
                        </View>
                        <View style={styles.infoItem}>
                            <ListItem
                                Component={TouchableScale}
                                friction={30}
                                tension={100}
                                activeScale={0.95}
                                title={(
                                    <View style={styles.infoDivCon}>
                                        <Text style={styles.infoDivTip}>邮箱：</Text>
                                        <Text style={styles.infoDiv}>{this.state.userInfo.email.length > 0 ? this.state.userInfo.email : '请添加邮箱，我们保证不会骚扰你的，请你放心 ：）'}</Text>
                                    </View>)}
                                containerStyle={styles.emailItem}
                                chevron={{ color: 'white' }}
                                onPress={this.changeInfoFunc.bind(this, 'email')}
                            />
                        </View>
                        <View style={styles.infoItem}>
                            <ListItem
                                Component={TouchableScale}
                                friction={30}
                                tension={100}
                                activeScale={0.95}
                                title='戳我，换个新的密码'
                                titleStyle={{color: '#ffffff', fontSize: 16, fontWeight: 'bold', fontStyle: 'italic'}}
                                containerStyle={styles.passwordItem}
                                chevron={{ color: 'white' }}
                                onPress={this.openPasswordDivFunc}
                            />
                        </View>
                    </View>
                    
                    <Button
                        onPress={this.logoutFunc}
                        title="注销"
                        style={styles.logoutBtn}
                        type="clear"
                    />
                </ScrollView>
                <Overlay
                    isVisible={this.state.changeIsVisible}
                    windowBackgroundColor="rgba(0, 0, 0, .6)"
                    // width="auto"
                    height="auto"
                    onBackdropPress={() => this.setState({ changeIsVisible: false })}
                >
                    <Input
                        autoFocus={true}
                        maxLength={20}
                        returnKeyType={'go'}
                        placeholder='请输入'
                        value={this.state.changeInfoText}
                        onChangeText={(text) => this.setState({changeInfoText: text})}
                        onSubmitEditing={this.finishInputFunc}
                    />
                </Overlay>
                
                <Overlay
                    isVisible={this.state.changePasswordVisible}
                    windowBackgroundColor="rgba(0, 0, 0, .6)"
                    overlayStyle={{paddingHorizontal: 15, paddingVertical: 15}}
                    // width="auto"
                    height="auto"
                    onBackdropPress={() => this.setState({ changePasswordVisible: false })}
                >
                    <View>
                        <Input
                            autoFocus={true}
                            maxLength={20}
                            returnKeyType={'go'}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    color='#00aced'
                                />
                            }
                            leftIconContainerStyle={{paddingRight: 15}}
                            placeholder='请输入旧密码'
                            value={this.state.oldPasswordText}
                            inputContainerStyle={{borderBottomColor: '#00aced'}}
                            onChangeText={(text) => this.setState({oldPasswordText: text})}
                        />
                        <Input
                            autoFocus={true}
                            maxLength={20}
                            returnKeyType={'go'}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    color='#00aced'
                                />
                            }
                            leftIconContainerStyle={{paddingRight: 15}}
                            placeholder='请输入新密码'
                            value={this.state.newPasswordText}
                            inputContainerStyle={{borderBottomColor: '#00aced'}}
                            onChangeText={(text) => this.setState({newPasswordText: text})}
                        />
                        <Input
                            autoFocus={true}
                            maxLength={20}
                            returnKeyType={'go'}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    color='#00aced'
                                />
                            }
                            leftIconContainerStyle={{paddingRight: 15}}
                            labelStyle={{color: 'red'}}
                            placeholder='再次输入新密码'
                            value={this.state.againPasswordText}
                            inputContainerStyle={{borderBottomColor: '#00aced'}}
                            onChangeText={(text) => this.setState({againPasswordText: text})}
                        />
                        <Button
                            title="提交"
                            type="outline"
                            buttonStyle={{display: 'flex', justifyContent: 'center', flexDirection: 'column',}}
                            containerStyle={{marginTop: 20}}
                            type="clear"
                            onPress={this.changePasswordFunc}
                        />
                    </View>
                    
                </Overlay>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    headerStyleObj: {
        backgroundColor: '#00aced',
        justifyContent: 'space-around'
    },
    avatarCon: {
        display: 'flex',
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
        
    },
    infoItem: {
        marginVertical: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
    accountItem: {
        marginRight: 20,
        backgroundColor: '#12d3a2',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    profileItem: {
        marginLeft: 20,
        backgroundColor: '#a2786d',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    locationItem: {
        marginRight: 20,
        backgroundColor: '#d367a2',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    emailItem: {
        marginLeft: 20,
        backgroundColor: '#90d4f2',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    passwordItem: {
        marginRight: 20,
        backgroundColor: '#ff22aa',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    infoDivCon: {
        display: 'flex',
        flexDirection: 'row'
    },
    infoDivTip: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    infoDiv: {
        flex: 1,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutBtn: {
        marginTop: 20,
    }
});
