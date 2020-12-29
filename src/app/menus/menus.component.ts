import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(dessert: string): void {
    // @ts-ignore
    this.viewportScroller.scrollToAnchor(dessert);
  }
}
