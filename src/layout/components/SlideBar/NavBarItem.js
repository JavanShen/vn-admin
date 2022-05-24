import { isExternal } from "@/utils/validate"

export const renderMenuLabel = ({path:link,label:name}) => {
    if(!link) return name
    if(isExternal(link)){
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        )
    }else{
        return (
            <router-link to={link}>
                {name}
            </router-link>
        )
    }
}

export const renderMenuIcon = ({iconName:name})=>{
    if(!name) return false
    return (
        <svg-icon iconClass={name}></svg-icon>
    )
}