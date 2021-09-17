import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View, Text, Navigator, Image } from '@tarojs/components'
import './index.scss'

interface DialogObj {
  chatId: number,
  nickName: string,
  pic: string,
  lv: number,
  date: string,
  content: string
}

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    new Promise((resolve, reject) => {
      Taro.request({
        url: 'http://localhost:3000/list',
        method: 'GET',
        success(request) {
          resolve(request.data);
        },
        fail(request: any) {
          reject(request.data);
        },
      })
    }).then(res => {
      console.log(res, '=====res')
    })
    const dialogList: Array<DialogObj> = [
      {
        chatId: 1,
        nickName: 'test1',
        pic: 'test.png',
        lv: 1,
        date: '2019-02-03',
        content: 'balabalbabalba'
      },
      {
        chatId: 2,
        nickName: 'test2',
        pic: 'test.png',
        lv: 1,
        date: '2019-02-03',
        content: 'balabalbabalba'
      },
      {
        chatId: 3,
        nickName: 'test3',
        pic: 'test.png',
        lv: 3,
        date: '2019-02-03',
        content: 'balabalbabalba'
      }
    ]
    return (
      <View className='index'>
        {
          dialogList && dialogList.length ? dialogList.map(item => {
            return (<View className="list-item">
              <View className="left-pic">
                <Image src={item.pic} />
                <Text className="left-pic-text">{item.lv}</Text>
              </View>
              <View className="center">
                <Text className="top">{item.nickName}</Text>
                <Text>{item.content}</Text>
              </View>
              <Text className="right">{item.date}</Text>
            </View>)
          }):null
        }
        <Text>dialog list</Text>
      </View>
    )
  }
}
