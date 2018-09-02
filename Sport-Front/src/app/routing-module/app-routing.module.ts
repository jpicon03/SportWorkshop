import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from '../book/book-list/book-list.component';
import {AuthorListComponent} from '../author/author-list/author-list.component';
import {EditorialListComponent} from '../editorial/editorial-list/editorial-list.component';


const routes: Routes = [
    
    {
        path: 'books',
        children: [
            {
                path: 'list',
                component: BookListComponent
            }
        ]
    },
    {
        path: 'authors',
        children: [
            {
                path: 'list',
                component: AuthorListComponent
            }
        ]
    },
    {
        path: 'editorials',
        children: [
            {
                path: 'list',
                component: EditorialListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
    
}
