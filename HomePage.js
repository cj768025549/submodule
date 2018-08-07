import React from 'react'
import BaseComponent from './BaseComponent'
import {Linking, StyleSheet, View} from 'react-native'
import CustomButton from './CustomButton'

export default class HomePage extends BaseComponent {
    //重写该方法，可以动态定制导航
    static navigationOptions = ({navigation}) => ({
        title: 'Home Page',    //设置navigator的title

    })

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        Linking.addEventListener('url', this.handleOpenURL);
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = (event) => {
        console.log(event.url);
        this.props.navigation.navigate('TestLinkPage', {url: event.url})
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <CustomButton onButtonPressed={() => {
                    this.props.navigation.navigate(
                        'CheckUpdatePage',
                    )
                }} buttonTitle={'检查更新'}/>
                <CustomButton onButtonPressed={() => {
                    this.props.navigation.navigate(
                        'GetAuthorityPage'
                    )
                }} buttonTitle={'获取权限'}/>
                <CustomButton onButtonPressed={() => {
                    this.props.navigation.navigate(
                        'TestLinkPage',
                        {url: '......'}
                    )

                }} buttonTitle={'Linking'}/>
                <CustomButton onButtonPressed={() => {
                    this.props.navigation.navigate(
                        'TestPage1'
                    )
                }} buttonTitle={'Redux'}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});