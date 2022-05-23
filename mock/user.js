import Mock from 'mockjs';

Mock.mock('/user/list',{
    'code':0,
    'data|100':[{
        'id|+1':1,
        'name':'@cname',
        'birthday':'@date',
        'address':'@county(true)',
        'email':'@email',
        'phone':'@integer(1,1000000000)'
    }]
})

Mock.mock('/user/update',config=>{
    const {id,name,birthday,address,email,phone}=JSON.parse(config.body);
    return {
        'code':0,
        'data':{
            'id':id,
            'name':name,
            'birthday':birthday,
            'address':address,
            'email':email,
            'phone':phone
        }
    }
})