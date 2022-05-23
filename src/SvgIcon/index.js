import IconSvg from './SvgIcon.vue';

export default{
    install(app){
        app.component('svg-icon', IconSvg);
    }
}

// 批量导入svg图标
const req=require.context('./svg',false,/\.svg$/)
req.keys().map(req)