export const STORE_KEY = "ml225371-study-v2";
export const defaults = {version:2,theme:"light",fontScale:100,practice:{answers:{},completedTopics:[]},exam:{answers:{},startedAt:null,submitted:false},streak:{days:0,lastDate:null}};
export function loadState(){try{const x=JSON.parse(localStorage.getItem(STORE_KEY));return x?.version===2?{...defaults,...x,practice:{...defaults.practice,...x.practice},exam:{...defaults.exam,...x.exam},streak:{...defaults.streak,...x.streak}}:{...defaults}}catch{return {...defaults}}}
export function saveState(state){localStorage.setItem(STORE_KEY,JSON.stringify({...state,version:2}));return state}
export function resetState(){localStorage.removeItem(STORE_KEY);return {...defaults}}
