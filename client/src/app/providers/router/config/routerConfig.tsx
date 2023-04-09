import { CardOfObjects } from 'pages/CardOfObjects';
import { CompleteTasks } from 'pages/CompleteTasks';
import { Dashboard } from 'pages/Dashboard';
import { Meetings } from 'pages/Meetings';
import { ObjectsRegistry } from 'pages/ObjectsRegistry';
import { Tasks } from 'pages/Tasks';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    REGISTRY = 'registry',
    DASHBOARD = 'dashboard',
    MEETINGS = 'meetings',
    COMPLETE = 'complete',
    CARD = 'card',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.REGISTRY]: '/registry',
    [AppRoutes.DASHBOARD]: '/',
    [AppRoutes.MEETINGS]: '/meetings',
    [AppRoutes.COMPLETE]: '/complete',
    [AppRoutes.CARD]: '/card'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.REGISTRY]: {
        path: RoutePaths.registry,
        element: <ObjectsRegistry/>
    },
    [AppRoutes.DASHBOARD]: {
        path: RoutePaths.dashboard,
        element: <Dashboard/>
    },
    [AppRoutes.MEETINGS]: {
        path: RoutePaths.meetings,
        element: <Meetings/>
    },
    [AppRoutes.COMPLETE]: {
        path: RoutePaths.complete,
        element: <CompleteTasks/>
    },
    [AppRoutes.CARD]: {
        path: RoutePaths.card,
        element: <CardOfObjects/>
    }
}