export const ADD_FEATURE ="ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = newfeature => {
    console.log("added new feature");
    console.log(newfeature)
    return {
        type: ADD_FEATURE, 
        payload:{
        id: newfeature.id,
        name: newfeature.name,
        price: newfeature.price
    
    }
    }
}
export const removeFeature = featuredeleted => {
    console.log("feature has been removed");
    return {type:REMOVE_FEATURE, payload:featuredeleted};
}