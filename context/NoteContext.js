import createDataContext from "../context/createDataContext";
import jsonServer from '../api/jsonServer'

const noteReducer = (state , action) => {
    switch (action.type) {
        case 'get_noteposts':
            return action.payload
        case 'edit_notepost':
            return state.map((notePost) => {
                return notePost.id === action.payload.id ? action.payload : notePost
            })
        case 'delete_notepost':
            return state.filter((notepost) => notepost.id !== action.payload)
        
        default:
            return state;
    }

}

const getNotePosts = dispatch => {
    return async () => {
       const response = await jsonServer.get('/noteposts')

       dispatch({ type: 'get_noteposts', payload: response.data })
    }
}

const addNotePost = (dispatch) => {
    return async (title, content, callback ) => {
        await jsonServer.post('/noteposts',{title,content})
        
        if(callback) {
            callback()
        }
    }
}

const deleteNotePost = dispatch => {
    return async id => {
        await jsonServer.delete(`/noteposts/${id}`)
        dispatch({type: 'delete_notepost', payload: id })
    }
}

const editNotePost = dispatch => {
    return async (id, title , content ,callback) => {
        await jsonServer.put(`/noteposts/${id}`,{ title,content })
        
        dispatch({type: 'edit_notepost', payload: { id ,title, content },})
        if (callback) {
            callback()
        }
    }
}

export const { Context , Provider  } = createDataContext
(noteReducer,
    {addNotePost , deleteNotePost, editNotePost, getNotePosts },
    []
)