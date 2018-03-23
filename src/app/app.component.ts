import { Component, OnInit } from '@angular/core';
import { AppCompService } from './appComp.services';
import { AppModuleService } from './appModule.services';
import $ from 'jquery';
// this is used to test if window.myjq is the same object with the $ imported in lazy.component.ts
// see lazy.component.ts
(window as any).myjq = $;

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['app.component.css'],
  styles: ['.welcome {background-color: gray;}'],
  providers: [AppCompService]
})
export class AppComponent implements OnInit {
  title = 'aot demo';
  ChangeDetect = '';

  appCompServiceData = '';
  appModuleServiceData = '';

  constructor(appCompService: AppCompService,
    appModuleService: AppModuleService) {
    this.appCompServiceData = appCompService.data;
    this.appModuleServiceData = appModuleService.data;
  }

  ngOnInit() {
    $('#show-jquery').text("import jquery successfully!").css("color", "red");
    setTimeout(() => this.ChangeDetect = 'Angular change detection works!', 1500);
  }
}
