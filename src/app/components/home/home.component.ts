import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  btnClick(){
    console.log("btn click");
    this.snackbar.open("Hey Angular developer");
    
  }

}
