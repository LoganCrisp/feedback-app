import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  standalone: false,
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css',
})
export class FeedbackFormComponent {
  formData = {
    //init form data
    name: '',
    email: '',
    rating: null,
    comments: '',
  };

  submittedData: any[] = []; //empty array used to store feedback

  submitForm() {
    this.submittedData.push({ ...this.formData }); //pushes a copy of the form data

    this.formData = {
      //clears form and resets it to inital state
      name: '',
      email: '',
      rating: null,
      comments: '',
    };
  }
}
