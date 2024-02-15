import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login/Login'

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
            }
        ]
    }
])

export default appRouter