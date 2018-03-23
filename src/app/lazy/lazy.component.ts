import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
console.log((window as any).myjq === $); // true

@Component({
  templateUrl: 'lazy.component.html'
})

export class LazyComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}