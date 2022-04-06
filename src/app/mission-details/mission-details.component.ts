import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit, OnChanges {
  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.data)
  }

}
