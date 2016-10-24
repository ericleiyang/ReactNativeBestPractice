/**
* @Author: Eric
* @Date:   24-Oct-2016
* @Project: React Native
* @Last modified by:   Eric
* @Last modified time: 24-Oct-2016
*/

/**
 * ##Subview.js
 * This is called from Main to demonstrate the back button
 *
 */
'use strict'

/**
 * ## Imports
 * Imports from redux
 *
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

/**
 * Router
 */
import {Acions} from 'react-native-router-flux'

/**
 * Navigation Bar
 */
import Navigationbar from 'react-native-navbar'

/**
 * The neccessary components from React
 */
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

/**
 * User device options so we can reference the version
 */
import * as deviceActions from '../reducers/device/deviceActions'

/**
 * ## Redux boilerplate
 */

/**
  *  Instead of including all app states via ...state
  *  You probably want to explicitly enumerate only those which Main.js will depend on.
  *
  */
function mapStateToProps(state) {
    return {deviceVersion: state.device.version}
}

/**
 * Bind all the actions in deviceActions
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deviceActions, dispatch)
    }
}

var styles = StyleSheet.create({
    container: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginTop: 80,
        padding: 10
    },
    summary: {
        fontFamily: 'BodoniSvtyTwoITCTT-Book',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

/**
 * ## Subview class
 */
let Subview = React.createClass({
    render(){
        var titleConfig = {
            title: 'Subview.subview'
        }
        var leftButtonConfig = {
            title: 'Subview.back',
            handler: Actions.pop
        }
        return{
            <View>
                <Navigationbar
                    title = {titleConfig}
                    leftButton = {leftButtonConfig}
                />
                <View style = {styles.container}>
                    <Text style = {styles.summary}>
                        {Subview.subview} {App.version} : {this.props.deviceVersion}
                    </Text>
                </View>
            </View>
        }
    }
})

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(Subview)
