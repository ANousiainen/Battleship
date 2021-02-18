import React, { Component } from 'react'
import {Text, View} from 'react-native'
import styles from '../style/style'

export default function Header() {
        return(
            <View style={styles.header}>
                <Text style={styles.title}>
                    B A T T L E S H I P S 
                </Text>
            </View>
        )
 }