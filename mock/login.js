import Mock from 'mockjs';

const TOKEN={
    'admin':'123abc',
    'editor':'456def',
    'user':'789ghi',
    'guest':'123'
}

const ROLE={
    '123abc':['admin'],
    '456def':['editor'],
    '789ghi':['user'],
    '123':['guest'],
}

Mock.mock('/user/info', config => {
    const {token} = JSON.parse(config.body);
    if(token){
        return {
            code:0,
            data:{
                'name': '@cname',
                'avatar': '@image(100x100,@color,@cword)',
                'email': '@email',
                'phone': /^1[34578]\d{9}$/,
                'address': '@county(true)',
                'introduction': '@cparagraph(1,3)',
                'roles':ROLE[token],
            }
        }
    }else{
        return {
            code:1,
            msg:'未注册'
        }
    }
})

Mock.mock('/login', config=>{
    let token=TOKEN[JSON.parse(config.body).username];
    return {
        'code': token?0:1,
        'msg': token?'登录成功':'用户名或密码错误',
        'data': {
            token
        }
    }
})