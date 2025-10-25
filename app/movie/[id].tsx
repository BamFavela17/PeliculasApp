import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Detaills = () => {
    const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Movie Detaills: {id}</Text>
    </View>
  )
}

export default Detaills

const styles = StyleSheet.create({})