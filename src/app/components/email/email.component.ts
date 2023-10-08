import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/servive/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  data={
    to:"",
    subject:"",
    message:""
  }

  constructor(private email:EmailService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  doSubmitForm(){
    console.log("submit form success");
    console.log("Data", this.data);
    if(this.data.to=='' || this.data.message=='' || this.data.subject==''){
     this.snack.open("feild cant empty","OK");
     return;
    }

    this.email.sendEmail(this.data).subscribe(
     response=>{
       console.log(response);
       
     },
     error=>{
        console.log(error);
        
     }
     

    )

    
    
  }

}
