import request from '../common/request/request';

export const login = data => request.post('/auth/login', data);

export const getUserList = params => request.get('/account/list', { params });

export const addUser = data => request.post('/account/user', data);

export const editUser = data => request.put('/account/user', data);

export const delUser = id => request.delete(`/account/user/${id}`);

export const userDetail = id => request.get(`/account/detail/${id}`);

export const getRoleList = params => request.get('/role/list', { params });

export const addRole = data => request.post('/role/create', data);

export const getMenuTree = params => request.get('/menu/tree', { params });

export const getMenuList = params => request.get('/menu/list', { params });

export const addMenu = data => request.post('/menu/create', data);

export const getMenuLDetail = id => request.get(`/menu/detail/${id}`);

export const getAuthorityList = params => request.get('/permission/list', { params });

export const saveAuthority = data => request.post('/permission/create', data);

export const getAuthorityTree = params => request.get('/menu/authority', { params });
