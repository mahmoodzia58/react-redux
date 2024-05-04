import  {createStore} from 'redux';

const intial_value={
    counter:0 ,
    privacy:false
}  
 const counterReducer =(store = intial_value,action)=>{
    if(action.type === "Increment"){
        return{...store, counter:store.counter+1}
    }
    else if (action.type === "Decrement"){
        return{...store, counter:store.counter-1}
    }
    else if (action.type === "Add"){
        return{...store, counter:store.counter + Number(action.payload.num)}
    }
    else if (action.type === "Subtract"){
        return{...store, counter:store.counter - Number(action.payload.num)}
    }
    else if (action.type === "privacy_toggle"){
        return{...store, privacy:!store.privacy}
    }
    console.log("action received", action)
    return store ;
}
const counterstore= createStore(counterReducer)

export default counterstore;
