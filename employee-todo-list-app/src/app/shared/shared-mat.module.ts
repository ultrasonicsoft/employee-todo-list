import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatButtonModule,
        MatToolbarModule
    ]
})
export class SharedMatModule { }
