import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../../context/NoteContext'
import NotePostForm from '../../component/NotePostForm'

const EditScreen =({ navigation }) => {
    const id = navigation.getParam('id')
    const {state,  editNotePost} = useContext(Context)

    const notePost = state.find(
        notePost => notePost.id === id
    )

   

    return <NotePostForm 
        initialValues = {{ title: notePost.title, content: notePost.content }}
        onSubmit = {(title,content)=>{
            editNotePost(id,title,content, () => navigation.pop() )
        }} />
}

const styles = StyleSheet.create({})

export default EditScreen