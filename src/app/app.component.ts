import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService} from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF';
  topics = ['Angular', 'React', 'Vue'];
  
  userModel = new User('Rob', 'rob@test.com', 55345345345, 'Angular', 'morning');
  errorMessage = '';
  successMsg = false;

  constructor(private _enrollmentService: EnrollmentService){ }

  onSubmit(){
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => this.successMsg = true,
      error => this.errorMessage = error.statusText
    )
  }
  
}
