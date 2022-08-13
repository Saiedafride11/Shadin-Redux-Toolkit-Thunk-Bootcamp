import booksData from "../../fakeData/books.json";

const initialState = {
      discover: booksData,
      readingList: [],
      finishedList: []
}

function bookReducers(state = initialState, action){
      // if(state.type === 'ADD_TO_READING_LIST'){
      //       const newState = [...state, action.payload];
      //       return newState;
      // }
      // else if(state.type === 'REMOVE_FROM_READING_LIST'){
      //       const newState = state.filter(book => book.id !== action.payload);
      //       return newState;
      // }

      switch(action.type){
            case 'ADD_TO_READING_LIST': {
                  return {
                        ...state,
                        readingList: [...state.readingList, action.payload]
                  };
            }
            case 'REMOVE_FROM_READING_LIST': {
                  return {
                        ...state,
                        readingList: state.readingList.filter(book => book.id !== action.payload)
                  }
            }
            default:
                  return state
      }
}

export default bookReducers;




// function bookReducer(state = initialState, action) {
//       switch(action.type) {
//           case 'ADD_TO_READING_LIST': {
//               const newState = {...state, readingList: [...state.readingList, action.payload] }
//               return newState
//           }
//           case 'REMOVE_FROM_READING_LIST': {
//               const newState = {...state, readingList: state.readingList.filter((book) => book.id !== action.payload )}
               
//               return newState
//           }
//           default: 
//             return state
//       }
//   }