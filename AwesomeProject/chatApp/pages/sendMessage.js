import React, {Component} from 'react';
import { Header, SearchBar, Overlay, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import deviceStorage from '../common/deviceStorage2'


export default class FriendPage extends Component {
    state = {
        userInfoSelf: '',
        contacts: '迪丽热巴',
        talkContent: [
            {
                promoter: '迪丽热巴',
                promoterAvatar: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=82905fe6e0f81a4c323fe49bb6430b3c/5882b2b7d0a20cf4bf0e134d7d094b36adaf9982.jpg',
                recipient: 'xiaolizi',
                recipientAvatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                content: '哥，干嘛呢',
                creat_tiem: '2019-11-17 16:00',
            },
            {
                promoter: '我',
                promoterAvatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                recipient: 'xiaolizi',
                recipientAvatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                content: '工作呢',
                creat_tiem: '2019-11-17 16:00',
            },
            {
                promoter: '😎',
                recipient: 'orangeking',
                content: 'what ary you nong sha lei!',
                creat_tiem: '2019-11-17 16:00',
            },
            {
                promoter: '😎',
                recipient: 'orangeking',
                content: 'fire hot',
                creat_tiem: '2019-11-17 16:00',
            },
            {
                promoter: '🚀',
                recipient: 'orangeking',
                content: 'wutianfashi',
                creat_tiem: '2019-11-17 16:00',
            },
            {
                promoter: 'Wudi',
                recipient: 'orangeking',
                content: 'msa qiqiao!🍕',
                creat_tiem: '2019-11-17 16:00',
            },
            {
                promoter: '😁🙋🙇🙋🙇',
                recipient: 'lizioa',
                content: '干哈',
                creat_tiem: '',
            },
        ],
        messageContent: '👍你这牛啊🐮'
    }
    
    updateMessage = text => {
        this.setState({ messageContent: text });
    };
    
    // 返回联系人
    backPage = () => {
        this.props.navigation.goBack();
    }
    
    keyExtractor = (item, index) => index.toString()
    
    // 消息组件
    messageComponent = ({item}) => {
        return (
            <View style={item.promoter == this.state.contacts ? styles.messageCompentCon : styles.messageCompentConRight}>
                <View>
                    <Avatar
                        size="small"
                        title="头像"
                        rounded
                        source={{
                            uri: item.promoterAvatar
                        }}
                    />
                </View>
                <View style={item.promoter == this.state.contacts ? styles.messageText : styles.messageTextRight}>
                    <Text style={item.promoter == this.state.contacts ? styles.messageTextTip : styles.messageTextTipRight}>{item.content}</Text>
                </View>
            </View>
        )
        
    }
    
    
    
    // 发送消息
    sendMessageFunc = () => {
        console.log(this.state.messageContent);
    }
    
    render() {
        
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name='arrow-left' size={20} color={'#ffffff'} onPress={this.backPage}/>}
                    centerComponent={{ text: this.state.contacts, style: { color: '#fff', fontSize: 18 } }}
                    containerStyle={styles.headerStyleObj}
                />
                <FlatList
                    data={this.state.talkContent}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.messageComponent}
                />
    
                <SearchBar
                    searchIcon={false}
                    lightTheme={true}
                    containerStyle={styles.messageCon}
                    inputContainerStyle={styles.messageTextCon}
                    onChangeText={this.updateMessage}
                    value={this.state.messageContent}
                    onSubmitEditing={this.sendMessageFunc}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerStyleObj: {
        backgroundColor: '#00aced',
        justifyContent: 'space-around'
    },
    messageCon: {
        backgroundColor: '#f5f5f5',
    },
    messageTextCon: {
        backgroundColor: '#ffffff',
        borderRadius: 20
    },
    messageCompentCon: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    messageCompentConRight: {
        display: 'flex',
        flexDirection: 'row-reverse',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    messageText: {
        // flex: 1,
        // marginHorizontal: 10,
        marginLeft: 10,
        marginRight: 55,
        borderRadius: 10,
        overflow: 'hidden'
    },
    messageTextRight: {
        marginLeft: 55,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    messageTextTip: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: 20,
        color: '#333333'
    },
    messageTextTipRight: {
        backgroundColor: '#00aced',
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: 20,
        color: '#ffffff'
    }
    
});
