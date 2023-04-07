import { MainPage } from 'pages/MainPage';
import { SecondPage } from 'pages/SecondPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    SECOND = 'second',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.SECOND]: '/second',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    [AppRoutes.SECOND]: {
        path: RoutePaths.second,
        element: <SecondPage/>
    }
}