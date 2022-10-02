
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'coming-soon-classic',
    templateUrl: './coming-soon.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ComingSoonModernReversedComponent implements OnInit {
    @ViewChild('comingSoonNgForm') comingSoonNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    comingSoonForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private http: HttpClient
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.comingSoonForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    register(): void {
        // Return if the form is invalid
        if (this.comingSoonForm.invalid) {
            return;
        }

        // Disable the form
        this.comingSoonForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Do your action here...
        // Emulate server delay
        setTimeout(() => {

            const formData: any = new FormData();
            formData.append('name', '');
            formData.append('email', this.comingSoonNgForm.value.email);
            formData.append('message', '');
            formData.append('type', 'subscribe');

            this.http.post('https://script.google.com/macros/s/AKfycbzBSXEQLg5J_b7a8Q-w_XliDHoV5F-9U0_yUu8x0I4vB6KrMXzdVWFy8Q47np3OROIpOA/exec', formData).subscribe(
                (response) => {
                    // choose the response message
                    if (response['result'] === 'success') {
                        alert('You are subscribed successfully.');
                    } else {
                        alert('Oops! Something went wrong... Reload the page and try again.');
                    }

                    console.log(response);
                },
                (error) => {
                    alert('Oops! Something went wrong... Reload the page and try again.');
                    console.log(error);
                }
            );

            // Re-enable the form
            this.comingSoonForm.enable();

            // Reset the form
            this.comingSoonNgForm.resetForm();

            // Set the alert
            this.alert = {
                type: 'success',
                message: 'You have been registered to the list.'
            };

        }, 1000);
    }
}
