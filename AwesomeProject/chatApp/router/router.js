import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthScreen from '../auth/auth'
import loginScreen from "../pages/login"
import registerScreen from "../pages/register"
import contactsScreen from "../pages/contacts"
import messageScreen from "../pages/message"
import personalCenterScreen from "../pages/personalCenter"
import AddFriend from "../pages/addFriend"
import SendMessage from "../pages/sendMessage"
/*
* 1.存在问题，没有将react-native-community/async-storage集成到ios内
* */

const mainScreen = createBottomTabNavigator(
    {
        personalScreen: {
            screen: personalCenterScreen,
            navigationOptions: {
                tabBarLabel: '中心',
                tabBarIcon: ({tintColor, focused}) => (<Icon name='cog' size={24} color={focused ? '#00aced' : '#999999'}/>),
            }
        },
        messageScreen: {
            screen: messageScreen,
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon: ({tintColor, focused}) => (<Icon name='comment' size={24} color={focused ? '#00aced' : '#999999'}/>),
            }
        },
        contactsScreen: {
            screen: contactsScreen,
            navigationOptions: {
                tabBarLabel: '联系人',
                tabBarIcon: ({tintColor, focused}) => (<Icon name='address-book' size={24} color={focused ? '#00aced' : '#999999'}/>),
            }
        },
        
       
    },{
        tabBarOptions: {
            inactiveTintColor: '#999999',
            activeTintColor: '#00aced',
            labelStyle: {
                fontSize: 12,
                paddingTop: 5
            },
            tabStyle: {
            },
            style: {
                paddingTop: 5,
                bottom: 5,
                backgroundColor: '#fafafa',
            },
        }
    }
)

const appStack = createStackNavigator(
    {
        Home: mainScreen,
        AddFriend: AddFriend,
        SendMessage: SendMessage
    },
    {
        mode: 'none',
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

const loginRegister = createStackNavigator(
    {
        Login: {
            screen: loginScreen,
            navigationOptions: {
                headerTitle: '登录'
            }
        },
        Register: {
            screen: registerScreen,
            navigationOptions: {
                headerTitle: '注册'
            }
        },
    },
    {
        mode: 'card',
        headerMode: 'none',
        initialRouteName: 'Login'
    }
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthScreen,
        App: appStack,
        Auth: loginRegister,
    },
    {
        mode: 'card',
        headerMode: 'none',
        initialRouteName: 'AuthLoading',
    }
));

export default AppContainer;
