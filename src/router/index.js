
import HelloWorld from '@/components/HelloWorld'

let router = [
	{
	  path: '/',
	  name: 'Hello',
	  component: HelloWorld
	},
	{
	  path: '/test',
	  name: 'test',
	  component: ()=>import('@/components/test')
	}
]

export default router
