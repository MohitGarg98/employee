let initialState = {
    employees: []
};

export default function items(state= initialState, action) {
    if(action.type === "ADD_EMPLOYEES"){
        return{            
            employees: action.employees
        }
    }
    return state;
}