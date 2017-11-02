

let router = [
	{
	  path: '/',
	  name: 'Hello',
	  component: ()=>import('@/pages/HelloWorld')
	},
	{
	  path: '/test',
	  name: 'test',
	  component: ()=>import('@/pages/test')
	}
]

export default router
