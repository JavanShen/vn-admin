import Mock from 'mockjs'

const tagHistory = [
    {
        id: 0,
        name: '菠萝'
    },
    {
        id: 1,
        name: '苹果'
    },
    {
        id: 2,
        name: '香蕉'
    }
]

const taskData = []

Mock.mock('/todo/getHistory', {
    code: 0,
    data: tagHistory
})

Mock.mock('/todo/addTag', config => {
    const { body: name } = config

    const lastTag = tagHistory.find(item => item.name === name)
    if (lastTag) {
        return {
            code: 0,
            data: lastTag
        }
    }

    const newTag = {
        id: tagHistory[tagHistory.length - 1].id + 1,
        name
    }
    tagHistory.push(newTag)
    return {
        code: 0,
        data: newTag
    }
})

Mock.mock('/todo/deleteTag', config => {
    const { body: id } = config
    tagHistory.splice(
        tagHistory.findIndex(item => item.id === id),
        1
    )
    return {
        code: 0,
        data: tagHistory
    }
})

Mock.mock('/todo/addTask', config => {
    const info = JSON.parse(config.body)
    const newTask = {
        id: taskData[taskData.length - 1]?.id ? taskData[taskData.length - 1].id + 1 : 0,
        ...info
    }
    taskData.push(newTask)
    return {
        code: 0,
        data: newTask
    }
})

Mock.mock('/todo/deleteTask', config => {
    const { body: id } = config
    taskData.splice(
        taskData.findIndex(item => item.id === id),
        1
    )
    return {
        code: 0,
        data: taskData
    }
})

Mock.mock('/todo/getTasks', {
    code: 0,
    data: taskData
})
