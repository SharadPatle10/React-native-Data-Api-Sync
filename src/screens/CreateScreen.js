import React, { useContext } from "react"
import { StyleSheet} from "react-native"
import { Context } from "../../context/NoteContext";
import NotePostForm from '../../component/NotePostForm'

const CreateScreen = ({navigation}) => {
   
    const { addNotePost } = useContext(Context)

    return (
        <NotePostForm 
            onSubmit={(title ,content) => {
                addNotePost(title,content, () => navigation.navigate('Index'))
            }} 
        />
    )
}

const styles = StyleSheet.create ({})

export default CreateScreen