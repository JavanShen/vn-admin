import Mock from 'mockjs';

Mock.mock('/upload',{
    'code':0,
    'data':{
        'url':'http://www.baidu.com'
    }
})

Mock.mock('/article/submit',{
    'code':0,
    'msg':'success'
})