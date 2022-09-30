import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './safe.pipe';

@NgModule({
    declarations: [
        SafePipe

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SafePipe
    ],

})
export class SharedModule {
}
