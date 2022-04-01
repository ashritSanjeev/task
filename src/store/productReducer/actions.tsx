import { getAllcategories, getAllproducts } from "../api";

export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';
export const SET_ALL_PRODUCT = 'SET_ALL_PRODUCE';
export const SET_MASTER_LIST = 'SET_MASTER_LIST';


export const getCategories = async (dispatch: any) => {
    const allCategories = await getAllcategories();
    dispatch({
        type: SET_ALL_CATEGORIES,
        payload: allCategories,
    })
};

export const updateMasterList = (masterList:any) =>{
    // var tmp:any = [];
    // tmp = userState?.masterList;
    // console.log('userState', userState)
    // console.log('userState?.masterList', userState?.masterList)
    // tmp = tmp.push(masterList)
    // console.log('masterList', masterList)
    // console.log(tmp)
    return async (dispatch:any) => {
        dispatch({
            type: SET_MASTER_LIST,
            payload: [masterList]
        })
    }
}

// export const getProducts = (key:any) => async (dispatch: any) => {
//     const allProducts = await getAllproducts(key);

//     dispatch({
//         type: SET_ALL_PRODUCT,
//         payload: allProducts,
//     })
// };

export const getProducts = (key: any) => {
    return async (dispatch: any) =>  {
    const allProducts = await getAllproducts(key);
    dispatch({
        type: SET_ALL_PRODUCT,
        payload: allProducts,
    })
    }
};
