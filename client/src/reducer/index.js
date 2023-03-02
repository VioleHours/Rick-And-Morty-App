import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../Const/Const";

const initialState = {
    favorites: [],
    allCharacters: [],
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE: 
        return {
            ...state,
            favorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters, action.payload]
        }
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(char => char.id !== action.payload)
        }
        case FILTER:
            const filteredCharacters = state.allCharacters.filter(char => char.gender === action.payload)
        return {
            ...state,
            favorites: filteredCharacters
        }
        case ORDER:
            return {
                ...state,
                favorites:
                    action.payload === 'Asc'
                    ? state.allCharacters.sort ((a, b) =>
                        a.id - b.id
                    )
                    : state.allCharacters.sort ((a,b) => 
                        b.id - a.id
                    )
            }
            default:
                return state;
    }
}

export default Reducer;