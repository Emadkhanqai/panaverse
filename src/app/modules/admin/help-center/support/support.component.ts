/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { HelpCenterService } from 'app/modules/admin/help-center/help-center.service';

import '../../../../../assets/smtp.js';

declare let Email: any;

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
        private _helpCenterService: HelpCenterService
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
        // Email.send({
        //     Host: 'smtp.elasticemail.com',
        //     Username: 'emadkhanqai@gmail.com',
        //     Password: '84EA31F69123DB76BD2880401205C00BEC86',
        //     To: 'emadkhanqai@gmail.com',
        //     From: 'spidergrey.emad@gmail.com',
        //     Subject: 'Hello world',
        //     Body: 'hahahaha',
        // }).then((message) => { // Send your form here using an http request
        //     console.log('Your message has been sent!');

        //     // Show a success message (it can also be an error message)
        //     // and remove it after 5 seconds
        //     this.alert = {
        //         type: 'success',
        //         message: 'Your request has been delivered! A member of our support staff will respond as soon as possible.'
        //     };

        //     setTimeout(() => {
        //         this.alert = null;
        //     }, 7000);

        //     // Clear the form
        //     this.clearForm();
        // });

        this.alert = {
            type: 'success',
            message: 'This option will be available soon.'
        };

        setTimeout(() => {
            this.alert = null;
        }, 7000);

        // Clear the form
        this.clearForm();
    }
}
