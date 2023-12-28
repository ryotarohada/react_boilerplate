import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { APP_URLS } from '@/constants'

// @plop-route-import - Please don't delete. Comments for automatic addition by plop.
import { HomePage } from '@/pages/home'

const router = createBrowserRouter([
	// @plop-route - Please don't delete. Comments for automatic addition by plop.
	{
		path: APP_URLS.HOME,
		element: <HomePage />,
	},
])

export function CustomRouterProvider() {
	return <RouterProvider router={router} />
}
