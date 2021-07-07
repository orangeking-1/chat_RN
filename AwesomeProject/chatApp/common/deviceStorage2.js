/*
* 公用方法封装
* author： orangeking
* date: 2019-4-17
* */

import AsyncStorage from '@react-native-community/async-storage';

// 本地数据存储
export default class deviceStorage {
    // 取数据
    static async get(key) {
        try {
            return await AsyncStorage.getItem(key).then(val => {
                if(val !== null) {
                    let valueJson = JSON.parse(val)
                    return valueJson
                }
            })
        } catch(e) {
            console.log('AsyncStorage取数据出错:' + e)
        }
    }
    
    // 存数据
    static async save(key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.log('AsyncStorage存数据出错:' + e)
        }
    }
    
    
    // 更新数据
    static async update (key, val) {
        return await deviceStorage.get(key).then((item) => {
            // 判断val得类型，分类进行操作
            if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
                return AsyncStorage.setItem(key, JSON.stringify(val))
            } else {
                return AsyncStorage.setItem(key, JSON.stringify(Object.assign({}, item, val)))
            }
        })
    }

    // 删除
    static async delete (key) {
        return await AsyncStorage.removeItem(key)
    }
    
}

