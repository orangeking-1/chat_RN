import React, {Component} from 'react';
import {Avatar, ListItem, Button} from 'react-native-elements';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';


export default class infoDetailCard extends Component {
    constructor(props){
        super(props);
    }
    state = {
        userInfo: {
            'email': 'guanghangwang@163.com',
            'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            'profile': 'love life，love codding. love beauty, love all. love anything, love everyThing.',
            'created_time': '2019-02-18 13:53:55',
            'update_time': '2019-08-20 19:57:09',
            'location': '北京',
            'admin': true,
            'account': 'orangeking',
            'password': '123456',
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView alwaysBounceVertical={true}>
                    <View style={styles.avatarCon}>
                        <Avatar
                            size="large"
                            title="头像"
                            rounded
                            source={{
                                uri: this.props.info.avatar
                            }}
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
                                        <Text style={styles.infoDiv}>{this.props.info.account}</Text>
                                    </View>)}
                                containerStyle={styles.accountItem}
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
                                        <Text style={styles.infoDiv}>{this.props.info.profile.length > 0 ? this.props.info.profile : '小懒蛋，签名还没有写'}</Text>
                                    </View>)}
                                containerStyle={styles.profileItem}
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
                                        <Text style={styles.infoDiv}>{this.props.info.location.length > 0 ? this.props.info.location : '抱歉！未获取成功'}</Text>
                                    </View>)}
                                containerStyle={styles.locationItem}
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
                                        <Text style={styles.infoDiv}>{this.props.info.email.length > 0 ? this.props.info.email : '这损粗，没填写邮箱'}</Text>
                                    </View>)}
                                containerStyle={styles.emailItem}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.bottomBtnCon}>
                        <Button
                            title={this.props.title == 'add' ? "添加好友" : "发送信息"}
                            buttonStyle={styles.bottomBtn}
                            onPress={() => {
                                this.props._infoDetailClickBtn()
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // flex: 1,
        flexDirection: 'column',
    },
    avatarCon: {
        display: 'flex',
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center'
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
        fontWeight: 'bold',
    },
    infoDiv: {
        flex: 1,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomBtnCon: {
        marginTop: 30,
        marginBottom: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomBtn: {
        width: 150,
        backgroundColor: '#00aced'
    }
});
