import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login/Login'
import Browse from '../pages/Browse/Browse'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                // path: '/',
                // element: <Home />
            },
            {
                path: '/auth',
                element: <Login />
            },
            {
                path: '/browse',
                element: <Browse />
            }
        ]
    }
])

export default appRouter