import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.ts']
})

export class HomeComponent implements OnInit {
  user: any;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.testError().subscribe((data) => {this.user = data}, (e)=> console.log(e))
  }
}