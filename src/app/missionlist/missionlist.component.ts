import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-missionlist',
  template: `
    <p>
      missionlist works!
    </p>
  `,
  styles: [
  ]
})
export class MissionlistComponent implements OnInit {
  launchData = []
  isLoading = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllLaunches()
  }

  getAllLaunches():any{
    this.dataService.getAllLaunches()
    .subscribe((response: any) =>{
      console.log(response)
      this.launchData = response
      this.isLoading = false
    }, err => {
      console.log(err)
      this.isLoading = false
    })
  }

}
