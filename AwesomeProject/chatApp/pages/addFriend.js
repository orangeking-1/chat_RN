import React, {Component} from 'react';
import { ListItem, Header, SearchBar, Divider, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import InfoDetailCard from '../component/infoDetailCard'

export default class FriendPage extends Component {
    state = {
        search: '',
        tip: '在线推荐',
        friendsList: [
            {
                'email': 'aaa@163.com',
                'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                'profile': 'love life，love codding. love beauty, love all. love anything, love everyThing.',
                'created_time': '2019-02-18 13:53:55',
                'update_time': '2019-08-20 19:57:09',
                'location': '北京',
                'admin': true,
                'account': 'orangekissssng',
                'password': '123456',
            },
            {
                'email': '',
                'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                'profile': '',
                'created_time': '2019-02-18 13:53:55',
                'update_time': '2019-08-20 19:57:09',
                'location': '',
                'admin': true,
                'account': 'orangeking',
                'password': '123456',
            },
        ],
        showInfoDiv: false,
        infoDetail: {}
    }
    
    // 返回联系人
    backContactsScreen = () => {
        this.props.navigation.navigate('contactsScreen')
    }
    
    updateSearch = search => {
        this.setState({ search });
    }
    
    searchFriendFunc = () => {
        if (this.state.search !== '') {
            this.setState({tip: '搜索结果'})
        } else {
            this.setState({tip: '在线推荐'})
        }
    }
    // 清除搜索
    clearSearchFriendFunc = () => {
        this.setState({tip: '在线推荐'})
    }
    
    // 搜索列表
    keyExtractor = (item, index) => index.toString()
    searchListFunc() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.friendsList}
                renderItem={this.searchListsFunc}
            />
        )
    }
    searchListsFunc = ({item}) => (
        <ListItem
            title={item.account}
            subtitle={(<Text numberOfLines={1} style={styles.subtitle}>{item.profile}</Text>)}
            leftAvatar={{ source: { uri: item.avatar } }}
            containerStyle={styles.listItemCon}
            onPress={this.checkInfoFunc.bind(this, item)}
        />
    )
    
    noFirendFunc = () => {
        return (
            <View style={styles.noneFriend}>
                <Text style={styles.noneText}>没有人唉！好尴尬</Text>
            </View>
        )
    }
    
    // 查看详情信息
    checkInfoFunc = item => {
        this.setState({showInfoDiv: true, infoDetail: item})
    }
    
    // 添加好友
    _addfirendFunc = () => {
        console.log('添加好友啦');
    
    }
    
    render() {
        const { search } = this.state;
        
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name='arrow-left' size={20} color={'#ffffff'} onPress={this.backContactsScreen}/>}
                    centerComponent={{ text: '添加', style: { color: '#fff', fontSize: 18 } }}
                    containerStyle={styles.headerStyleObj}
                />
                
                <SearchBar
                    containerStyle={styles.searchCon}
                    inputContainerStyle={styles.searchInputCon}
                    inputStyle={styles.searchInput}
                    placeholder="输入账号"
                    onChangeText={this.updateSearch}
                    value={search}
                    platform={'ios'}
                    cancelButtonTitle={'取消'}
                    onSubmitEditing={this.searchFriendFunc}
                    onClear={this.clearSearchFriendFunc}
                />
               
                <Text style={styles.tip}>
                    {this.state.tip}
                </Text>
                <View style={styles.listCon}>
                    {this.state.friendsList.length > 0 ? this.searchListFunc() : this.noFirendFunc()}
                </View>
    
                <Overlay
                    overlayStyle={styles.cardCon}
                    isVisible={this.state.showInfoDiv}
                    borderRadius={20}
                    height="auto"
                    onBackdropPress={() => this.setState({ showInfoDiv: false })}>
                    <InfoDetailCard
                        title={'add'}
                        _infoDetailClickBtn={this._addfirendFunc.bind(this)}
                        info={this.state.infoDetail}/>
                </Overlay>

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
    searchCon: {
        backgroundColor: '#ffffff'
    },
    searchInputCon: {
        backgroundColor: '#f5f5f5'
    },
    searchInput: {
    },
    tip: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: '#777777'
    },
    listCon: {
        flex: 1,
    },
    noneFriend: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noneText: {
        color: '#666666'
    },
    listItemCon: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    cardCon: {
        padding: 0,
    }
});
