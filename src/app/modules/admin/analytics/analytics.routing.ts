import { Route } from '@angular/router';
import { AnalyticsComponent } from 'app/modules/admin/analytics/analytics.component';
import { AnalyticsResolver } from 'app/modules/admin/analytics/analytics.resolvers';

export const analyticsRoutes: Route[] = [
    {
        path     : '',
        component: AnalyticsComponent,
        resolve  : {
            data: AnalyticsResolver
        }
    }
];
