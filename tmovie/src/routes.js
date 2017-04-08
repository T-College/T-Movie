export default [
  {
    path: '/', //默认路径
    redirect: '/home',
    meta: {
      name: '电影',
      isshowBackbtn: true,
    }
  },
  {
    path: '/home',//首页
    component: require('components/home/home'),
    meta: {
      name: '电影',
      isshowBackbtn: true,
    }
  },
  {
    path: '/discovery',//业务
    component: require('components/discovery/discovery'),
    meta: {
      name: '发现',
      isshowBackbtn: true,
    }
  },
  {
    path: '/profile',//客户
    component: require('components/profile/profile'),
    meta: {
      name: '我的',
      isshowBackbtn: true,
    },

  },
  {
    path: '*',
    component: require('./404.vue'),
    meta: {
      name: '404 not found'
    }
  },
];


