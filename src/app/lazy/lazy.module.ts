import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: LazyComponent }
  ])],
  exports: [],
  declarations: [LazyComponent],
  providers: [],
})
export class LazyModule { }
