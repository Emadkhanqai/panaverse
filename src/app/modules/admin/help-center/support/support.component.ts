/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { HelpCenterService } from 'app/modules/admin/help-center/help-center.service';


@Component({
    selector: 'help-center-support',
    templateUrl: './support.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class HelpCenterSupportComponent implements OnInit {
    @ViewChild('supportNgForm') supportNgForm: NgForm;

    alert: any;
    supportForm: UntypedFormGroup;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _helpCenterService: HelpCenterService,
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
        // Create the support form
        this.supportForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Clear the form
     */
    clearForm(): void {
        // Reset the form
        this.supportNgForm.resetForm();
    }

    /**
     * Send the form
     */
    sendForm(): void {

        const formData: any = new FormData();
        formData.append('name', this.supportNgForm.value.name);
        formData.append('email', this.supportNgForm.value.email);
        formData.append('message', this.supportNgForm.value.message);
        formData.append('type', 'support');

        this.http.post('https://script.google.com/macros/s/AKfycbzBSXEQLg5J_b7a8Q-w_XliDHoV5F-9U0_yUu8x0I4vB6KrMXzdVWFy8Q47np3OROIpOA/exec', formData).subscribe(
            (response) => {
                // choose the response message
                if (response['result'] == 'success') {
                    this.alert = {
                        type: 'success',
                        message: 'Query submitted successfully.'
                    };
                } else {
                    this.alert = {
                        type: 'error',
                        message: 'Oops! Something went wrong... Reload the page and try again.'
                    };
                }

                console.log(response);
            },
            (error) => {
                this.alert = {
                    type: 'error',
                    message: 'Oops! Something went wrong... Reload the page and try again.'
                };
                console.log(error);
            }
        );



        setTimeout(() => {
            this.alert = null;
        }, 7000);

        // Clear the form
        this.clearForm();
    }
}
