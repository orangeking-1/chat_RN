/*
* 封装fetch对http的请求
* @param opts 请求所需数据
* return json数据
* */

import {Alert} from 'react-native';

export default {
    ajax (opts = {}) {
        const {
            url,
            mode = 'cors',
            method = 'POST',
            params = {},
            headers = {'content-type': 'application/json'},
            ...other
        } = opts
        return new Promise((resolve, register) => {
            fetch(url, {
                method,
                body: JSON.stringify(params),
                mode,
                headers,
                ...other
            }).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return {
                        code: '-1',
                        data: '',
                        message: '服务器繁忙，请稍后再试；Code:' + response.status
                    }
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
                Alert.alert(
                    '提示',
                    '服务器连接失败，请好稍候尝试',
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false}
                )
                // register(err)
            })
        })
    }
}
