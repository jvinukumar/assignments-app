import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthService } from '../services/AuthService';

@Component({
    selector: 'app-auth-page',
    templateUrl: './authenticate-page.component.html',
    styles: []
})
export class AuthenticatePageComponent implements OnInit {
    logInForm: FormGroup;
    
    user: {emailId: string, password: string} = { emailId: '', password: ''};
    
    constructor(private authService: AuthService) {}
    
    ngOnInit() {
        this.logInForm = new FormGroup({
            'emailId': new FormControl(null, [Validators.required, Validators.email]),
            'passphrase': new FormControl(null, [Validators.required])
        });
    }

    onSubmit() {
        this.user.emailId = this.logInForm.value.emailId;
        this.user.password = this.logInForm.value.passphrase;
        this.authService.authenticateUser(this.user);
    }

}