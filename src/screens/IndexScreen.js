import React,{useContext , useEffect} from 'react'
import {View, Text ,StyleSheet,FlatList, TouchableOpacity} from 'react-native'
import {Context} from '../../context/NoteContext'
import {Feather } from '@expo/vector-icons'

const IndexScreen =({navigation}) =>{

    const {state, deleteNotePost, getNotePosts } = useContext(Context)

    useEffect(() => {
        getNotePosts()
        const listener = navigation.addListener('didFocus', () => {
            getNotePosts()
        })
        return () => {
            listener.remove()
        }
    }, [])

    return(
        <View>
            <FlatList
                data={state}
                keyExtractor = {notePosts => notePosts.title }
                renderItem = {({item}) =>{
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show' , {id: item.id})} >
                            <View style={styles.row} >
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteNotePost(item.id)} >
                                    <Feather name = 'trash' style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return{
       headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}  > 
            <Feather name = "plus" size =  {30}/>
        </TouchableOpacity>
    }
}


const styles = StyleSheet.create({
    row : {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical : 20,
        borderTopWidth : 1,
        borderColor : 'gray',
        paddingHorizontal : 30
    },
    title : {
        fontSize : 25,
    },
    icon : {
        fontSize: 25,
    }
})

export default IndexScreen