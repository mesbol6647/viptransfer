export const initialState={
    loading:false,
    data:[],
    error:""
}
export const reducer= (initialstate , action)=>{
    switch (action.type) {
        case "START":
            return{...initialState, loading:true}
        case "SUCCCES":
            return {...initialState, data:action.payload, loading:false, error:""}
        case "FAIL":
            return {...initialState, data:"", loading:false, error:action.payload}
        default:
           return initialState;
    }
}