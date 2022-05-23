import Mock from 'mockjs';

let tagHistory=[
    {
        id:0,
        name:'菠萝',
    },
    {
        id:1,
        name:'苹果',
    },
    {
        id:2,
        name:'香蕉',
    }
]

let taskData=[]

Mock.mock('/todo/getHistory',{
    code:0,
    data:tagHistory
})

Mock.mock('/todo/addTag',config=>{
    let {body:name}=config;
    
    let lastTag=tagHistory.find(item=>item.name===name);
    if(lastTag) {
        return {
            code:0,
            data: lastTag
        }
    }

    let newTag={
        id:tagHistory[tagHistory.length-1].id+1,
        name
    }
    tagHistory.push(newTag)
    return {
        code:0,
        data:newTag
    }
})

Mock.mock('/todo/deleteTag',config=>{
    let {body:id}=config;
    tagHistory.splice(tagHistory.findIndex(item=>item.id===id),1)
    return {
        code:0,
        data:tagHistory
    }
})

Mock.mock('/todo/addTask',config=>{
    let info=JSON.parse(config.body);
    let newTask={
        id:taskData[taskData.length-1]?.id?taskData[taskData.length-1].id+1:0,
        ...info
    }
    taskData.push(newTask)
    return {
        code:0,
        data:newTask
    }
})

Mock.mock('/todo/deleteTask',config=>{
    let {body:id}=config;
    taskData.splice(taskData.findIndex(item=>item.id===id),1)
    return {
        code:0,
        data:taskData
    }
})

Mock.mock('/todo/getTasks',{
    code:0,
    data:taskData
})