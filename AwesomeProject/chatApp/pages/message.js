import React, {Component} from 'react';
import { ListItem, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native';

export default class FriendPage extends Component {
    constructor(props){
        super(props);
    }
    state = {
        firendList : [
            {
                name: '刘亦菲',
                avatar_url: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike933%2C5%2C5%2C933%2C330/sign=d4057bd7289759ee5e5d6899d3922873/8ad4b31c8701a18b5b290d95902f07082938fe2e.jpg',
                subtitle: '我是女神'
            },
            {
                name: 'Jack Ma',
                avatar_url: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=19137b054936acaf4ded9eae1db0e675/0824ab18972bd407e706ebc179899e510eb309cc.jpg',
                subtitle: '阿里巴巴前CEO，土豪，具有钞能力。多财多亿'
            },
            {
                name: '王健林',
                avatar_url: 'https://image.wanda.cn/uploadfile/2013/0914/20130914090913657.jpg',
                subtitle: '定个小目标，完成他一个亿'
            },
            {
                name: '雷军',
                avatar_url: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=09cc647f49fbfbedc8543e2d19999c53/b21c8701a18b87d6741c5e5f050828381f30fd10.jpg',
                subtitle: '小米科技'
            },
            {
                name: '佟丽娅',
                avatar_url: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=da9f558b95ef76c6c4dff379fc7f969f/faedab64034f78f0c8741d597c310a55b3191c18.jpg',
                subtitle: '新疆羊肉串'
            },
            {
                name: '迪丽热巴',
                avatar_url: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=82905fe6e0f81a4c323fe49bb6430b3c/5882b2b7d0a20cf4bf0e134d7d094b36adaf9982.jpg',
                subtitle: '卖葡萄干，谁要葡萄干'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ],
        list: []
    }
    
    keyExtractor = (item, index) => index.toString()
    
    friendListFunc() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.firendList}
                renderItem={this.contactsListFunc}
            />
        )
    }
    
    goToSendMessage() {
        this.props.navigation.navigate('SendMessage');
    }
    
    // 消息列表
    contactsListFunc = ({ item }) => (
        <ListItem
            onPress={this.goToSendMessage.bind(this)}
            title={item.name}
            subtitle={(<Text numberOfLines={1} style={styles.subtitle}>{item.subtitle}</Text>)}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            containerStyle={styles.listItemCon}
            contentContainerStyle={styles.listItemText}
            badge={{ value: 67 > 99 ? '99+' : 3, status: "error", textStyle: {fontSize: 16}}}
            bottomDivider
        />
    )
    
    // 消息空列表
    noneContactsFunc = () => {
        return (
            <View style={styles.noneFriend}>
                <Text style={styles.noneText}>空空如也~~~</Text>
            </View>
        )
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: '消息', style: { color: '#fff', fontSize: 18 } }}
                    containerStyle={styles.headerStyleObj}
                />
                {this.state.firendList.length > 0 ? this.friendListFunc() : this.noneContactsFunc()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    },
    headerStyleObj: {
        backgroundColor: '#00aced',
        justifyContent: 'space-around'
    },
    listItemCon: {
        borderBottomWidth: 0,
        // marginBottom: 5
    },
    listItemText: {
        // backgroundColor: 'blue'
    },
    subtitle: {
        paddingTop: 5,
        color: '#666666'
    },
    noneFriend: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noneText: {
        color: '#999999'
    },
    noneText2: {
        color: '#999999',
        marginTop: 10
    }
});
