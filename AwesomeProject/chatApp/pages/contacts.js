import React, {Component} from 'react';
import {ListItem, Header, Overlay} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native';

import InfoDetailCard from '../component/infoDetailCard'


export default class FriendPage extends Component {
    constructor(props){
        super(props);
    }
    state = {
        firendList : [
            {
                account: '刘亦菲',
                avatar: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike933%2C5%2C5%2C933%2C330/sign=d4057bd7289759ee5e5d6899d3922873/8ad4b31c8701a18b5b290d95902f07082938fe2e.jpg',
                profile: '我是女神',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            {
                account: 'Jack Ma',
                avatar: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=19137b054936acaf4ded9eae1db0e675/0824ab18972bd407e706ebc179899e510eb309cc.jpg',
                profile: '阿里巴巴前CEO，土豪，具有钞能力。多财多亿',
                location: '北京',
                email: '',
            },
            {
                account: '王健林',
                avatar: 'https://image.wanda.cn/uploadfile/2013/0914/20130914090913657.jpg',
                profile: '定个小目标，完成他一个亿',
                location: '',
                email: 'guanghangwang@163.com',
            },
            {
                account: '雷军',
                avatar: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=09cc647f49fbfbedc8543e2d19999c53/b21c8701a18b87d6741c5e5f050828381f30fd10.jpg',
                profile: '小米科技',
                location: '',
                email: '',
            },
            {
                account: '佟丽娅',
                avatar: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=da9f558b95ef76c6c4dff379fc7f969f/faedab64034f78f0c8741d597c310a55b3191c18.jpg',
                profile: '新疆羊肉串',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            {
                account: '迪丽热巴',
                avatar: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=82905fe6e0f81a4c323fe49bb6430b3c/5882b2b7d0a20cf4bf0e134d7d094b36adaf9982.jpg',
                profile: '卖葡萄干，谁要葡萄干',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            {
                account: 'Chris Jackson',
                avatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                profile: 'Vice Chairman',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            {
                account: 'Kan sevdien',
                avatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                profile: 'Vice Chairman',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            {
                account: 'Chris Jackson',
                avatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                profile: 'Vice Chairman',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            {
                account: 'Chris Jackson',
                avatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                profile: 'Vice Chairman',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            {
                account: 'Chris Jackson',
                avatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                profile: 'Vice Chairman',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            {
                account: 'Chris Jackson',
                avatar: 'https://pic.qqtn.com/up/2019-11/2019110508340598432.jpg!360_360',
                profile: 'Vice Chairman',
                location: '北京',
                email: 'guanghangwang@163.com',
            },
            
        ],
        showInfoDiv: false,
        infoDetail: {}
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
    
    // 联系人列表
    contactsListFunc = ({ item }) => (
        <ListItem
            title={item.account}
            subtitle={(<Text numberOfLines={1} style={styles.subtitle}>{item.profile}</Text>)}
            leftAvatar={{ source: { uri: item.avatar } }}
            containerStyle={styles.listItemCon}
            contentContainerStyle={styles.listItemText}
            bottomDivider
            onPress={this.checkInfoFunc.bind(this, item)}
        />
    )
    
    // 查看详情信息
    checkInfoFunc = item => {
        this.setState({showInfoDiv: true, infoDetail: item})
    }
    
    
    // 联系人空列表
    noneContactsFunc = () => {
        return (
            <View style={styles.noneFriend}>
                <Text style={styles.noneText}>众里寻他千百度</Text>
                <Text style={styles.noneText2}>蓦然回首，那人却在右上角。</Text>
            </View>
        )
    }
    
    // 添加联系人
    addFirendFunc = () => {
        this.props.navigation.navigate('AddFriend')
    }
    
    // 查看详情信息
    _checkInfoFunc = () => {
        this.setState({
            showInfoDiv: false
        })
        this.props.navigation.navigate('SendMessage');
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: '联系人', style: { color: '#fff', fontSize: 18 } }}
                    rightComponent={<Icon name='user-plus' size={20} color={'#ffffff'} onPress={this.addFirendFunc}/>}
                    containerStyle={styles.headerStyleObj}
                />
                {this.state.firendList.length > 0 ? this.friendListFunc() : this.noneContactsFunc()}
                {/*个人信息详情*/}
                <Overlay
                    overlayStyle={styles.cardCon}
                    isVisible={this.state.showInfoDiv}
                    borderRadius={20}
                    height="auto"
                    onBackdropPress={() => this.setState({ showInfoDiv: false })}>
                    <InfoDetailCard
                        title={'send'}
                        _infoDetailClickBtn={this._checkInfoFunc.bind(this)}
                        info={this.state.infoDetail}/>
                </Overlay>
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
        paddingVertical: 20
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
    },
    cardCon: {
        padding: 0,
    }
});
