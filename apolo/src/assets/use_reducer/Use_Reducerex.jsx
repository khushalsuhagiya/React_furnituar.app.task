import { useReducer, useState } from 'react';

function createInitialState(username) {
    const initialTodos = [];
    // for (let i = 0; i < 5; i++) {
    //     initialTodos.push({
    //         id: i,
    //         text: username + "s task #" + (i + 1)
    //     });
    // }
    console.log(initialTodos);
    return {
        // draft: '',
        todos: initialTodos,
    };
}

function reducer(state, action) {
    switch (action.type) {
        case 'changed_draft': {
            return {
                draft: action.nextDraft,
                todos: state.todos,
            };
        };
        case 'added_todo': {
            return {
                draft: '',
                todos: [{
                    id: state.todos.length,
                    text: state.draft
                }, ...state.todos]
                    
            }
        }
    }
}


export default function Use_Reducerex({ username }) {
    const [state, dispatch] = useReducer(
        reducer,
        username,
        createInitialState
        );
        console.log(state);
        
        const [listValue, setListValue] = useState([]);
        function removeItem(i){
            const updatedListData = listValue.filter((id) => {
              return id.text!=i;
            })
            setListValue(updatedListData);
          }
        
        
    return (
        <>
            <input className=' border border-black p-6 mx-5'
                value={state.draft}
                onChange={e => {
                    dispatch({
                        type: 'changed_draft',
                        nextDraft: e.target.value
                    })
                }}
            />
            <button className='btn' onClick={() => {
                dispatch({ type: 'added_todo' });
            }}>Add</button>
            {/* <button className='btn' onClick={() => {dispatch({ type:'hello'})}}>delet</button> */}
            <ul className='mx-7 mt-5'>
                {state.todos.map(item => (
                    <li className='mt-5' key={item.id}>
                        {item.text}
                        <button className=' border border-red-700 mx-5 bg-amber-400'onClick={() => removeItem(item.text )}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
