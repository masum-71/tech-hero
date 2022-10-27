import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Course/Course";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import NotFound from "../components/Notfound/NotFound";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://tect-hero-server.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`https://tect-hero-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])