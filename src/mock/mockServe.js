import  Mock  from 'mockjs'
import product from './product.json'
import recommend from './recommend.json'
import collapseJson from './collapse.json'

Mock.mock('/mock/product',{code:200,data: product});
Mock.mock('/mock/recommend',{code:200,data: recommend});
Mock.mock('/mock/collapse',{code:200,data: collapseJson});