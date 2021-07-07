/*
* 公用方法封装
* author： orangeking
* date: 2019-4-17
* */

import { AsyncStorage } from 'react-native'

// 本地数据存储
class deviceStorage {
    // 取数据
    get (key) {
        return AsyncStorage.getItem(key).then((err, val) => {
            if (!err) {
                return JSON.parse(val)
            } else {
                console.log('asyncStorage存储出错：' + err)
            }
        })
    }

    // 存数据
    save (key, val) {
        return AsyncStorage.setItem(key, JSON.stringify(val))
    }

    // 更新数据
    update (key, val) {
        return deviceStorage.get(key).then((item) => {
            // 判断val得类型，分类进行操作
            if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
                return AsyncStorage.setItem(key, JSON.stringify(val))
            } else {
                return AsyncStorage.setItem(key, JSON.stringify(Object.assign({}, item, val)))
            }
        })
    }

    // 删除
    delete (key) {
        return AsyncStorage.removeItem(key)
    }

}

export default deviceStorage
