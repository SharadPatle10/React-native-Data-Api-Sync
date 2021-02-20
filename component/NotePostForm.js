import React, {useState} from 'react'
import {View, Text , StyleSheet, Button, TextInput} from 'react-native'


const NotePostForm = ({ onSubmit, initialValues }) => {
    const [title , setTitle] = useState(initialValues.title)
    const [content ,setContent] = useState(initialValues.content)

    
    return(
        <View>
            <Text style={styles.label} >Enter Title :</Text>
            <TextInput style={styles.input} value ={title} onChangeText ={text => setTitle(text)} />
            <Text style={styles.label} >Enter Content :</Text>
            <TextInput style={styles.input} value = {content} onChangeText = {text => setContent(text)} />
            <Button title = "Save Note Post" 
                onPress={() => onSubmit(title,content)} 
            />
        </View>
    )
}

NotePostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input : {
        fontSize :20,
        borderColor :'black',
        borderWidth : 1,
        marginBottom:15,
        padding : 10,
        margin : 10,
    },
    label :{
        fontSize : 20,
        marginBottom :5,
        marginLeft : 10,
    }
})


export default NotePostForm