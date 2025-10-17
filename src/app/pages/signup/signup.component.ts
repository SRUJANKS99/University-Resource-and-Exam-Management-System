import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private snack: MatSnackBar) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    // Validating form inputs
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('Username is required !!', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      this.snack.open('Password is required !!', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.firstName == '' || this.user.firstName == null) {
      this.snack.open('First name is required !!', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.lastName == '' || this.user.lastName == null) {
      this.snack.open('Last name is required !!', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.email == '' || this.user.email == null) {
      this.snack.open('Email is required !!', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.phone == '' || this.user.phone == null) {
      this.snack.open('Phone number is required !!', '', {
        duration: 3000,
      });
      return;
    }

    // Add user: Call the user service to save the user
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        // Success
        console.log(data);
        Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success');

        // Reset form after success
        this.resetForm();
      },
      (error) => {
        // Error
        console.log(error);
        this.snack.open(error.error.text || 'Something went wrong', '', {
          duration: 3000,
        });
      }
    );
  }

  // Reset the form fields
  resetForm() {
    this.user = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  }
}
