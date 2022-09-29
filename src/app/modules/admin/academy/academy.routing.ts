import { Route } from '@angular/router';
import { AcademyComponent } from 'app/modules/admin/academy/academy.component';
import { AcademyListComponent } from 'app/modules/admin/academy/list/list.component';
import { AcademyDetailsComponent } from 'app/modules/admin/academy/details/details.component';
import { AcademyCategoriesResolver, AcademyCourseResolver, AcademyCoursesResolver } from 'app/modules/admin/academy/academy.resolvers';

export const academyRoutes: Route[] = [
    {
        path: '',
        component: AcademyComponent,
        resolve: {
            categories: AcademyCategoriesResolver
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: AcademyListComponent,
                resolve: {
                    courses: AcademyCoursesResolver
                }
            },
            {
                path: 'course',
                children: [
                    {
                        path: '',
                        redirectTo: '/',
                        pathMatch:'full'

                    },
                    {
                        path: ':id',
                        component: AcademyDetailsComponent,
                        resolve: {
                            course: AcademyCourseResolver
                        }
                    }
                ]
            }

        ]
    }
];
