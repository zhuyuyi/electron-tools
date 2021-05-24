/*
 * @Author: 朱育仪 
 * @Date: 2021-05-19 11:10:25 
 * @Last Modified by: 朱育仪 
 * @Last Modified time: 2021-05-19 11:10:25 
 * @Description: 聊天室
 */

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Input, message } from 'antd';

message.config({
    duration: 1,
});

const ChatList = (props) => {

    const [value, setValue] = useState(''); // 输入框值
    const [socket, setSocket] = useState(null); // socket实例
    const [isConnected, setIsConnected] = useState(false); // socket是否连接
    const [chatList, setChatList] = useState([]); // 聊天室内容

    useEffect(() => {
        initSocket();
    }, [])

    // 初始化socket
    const initSocket = () => {
        let socket = io('http://127.0.0.1:7001', {
            // path: `${process.env.socketUrl}`,
            // 实际使用中可以在这里传递参数
            query: {
                messageType: 'chat',
            },
            withCredentials: true,
            transports: ['polling', 'websocket']
        });
        // 连接成功
        socket.on('connect', () => {
            console.log('socket 连接成功')
            message.success('socket 连接成功');
        });

        // 监听与服务端断开
        socket.on("disconnect", () => {
            message.success('socket 断开连接');
        })
        // 监听报错
        socket.on('error', (error) => {
            console.log(error, 'error');
            message.error(error);
        });
        // 监听报错
        socket.on('connect_error', (err) => {
            console.log(err.req, 'err.req');	     // the request object
            console.log(err.code, 'err.code');     // the error code, for example 1
            console.log(err.message, 'err.message');  // the error message, for example "Session ID unknown"
            console.log(err.context, 'err.context');  // some additional error context
            message.error(err);
        });
        setSocket(socket);
    }

    return (
        <div>
            1231231312313123
        </div >
    )
}
export default ChatList
