export const isExternal = (path) => {
    return /^(https?:|mailto:|tel:)/.test(path);
}

export const isEmail = (email) => {
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email);
}

export const isPhone = (phone) => {
    return /^1[3456789]\d{9}$/.test(phone);
}

export function isSameObject(obj1,obj2,isStrict=false){
    if(isStrict){
        return JSON.stringify(obj1)===JSON.stringify(obj2);
    }else{
        const isSame=(obj)=>{
            for(let key in obj){
                if(typeOf(obj[key])==='object'){
                    if(!isSame(obj[key])){
                        return false;
                    }
                }else if(obj[key]!==obj2[key]){
                    return false;
                }
            }
            return true
        }

        return isSame(obj1);
    }
}

export function typeOf(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}