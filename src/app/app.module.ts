import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppModuleService } from './appModule.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
    ])
  ],
  providers: [AppModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
