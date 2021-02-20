import React ,{useContext}from 'react'
import {View , Text , StyleSheet ,TouchableOpacity} from 'react-native'
import {Context} from '../../context/NoteContext'
import { EvilIcons }  from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context)

    const notepost = state.find((notepost)=>notepost.id === navigation.getParam('id'))
    
    return (
        <View>
            <Text>{notepost.title}</Text>
            <Text>{notepost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : () =>
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })} >
                <EvilIcons name='pencil' size = {35} />
            </TouchableOpacity>
        
    }
}

const styles = StyleSheet.create({})

export default ShowScreen