import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

// Modules
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Store
import { CreateMessageAction } from '../../reducers/messages/messages.actions';

@Component({
  standalone: true,
  selector: 'app-create-message-dialog',
  templateUrl: './create-message-dialog.component.html',
  styleUrls: ['./create-message-dialog.component.scss'],
  imports: [
    MatButtonModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ]
})
export class CreateMessageDialogComponent {

  public messageForm: FormGroup = this.createForm();

  constructor(
    private dialogRef: MatDialogRef<CreateMessageDialogComponent>,
    private formBuilder: FormBuilder,
    private store: Store,
  ) {
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  createNewMessage(): void {
    this.store.dispatch(new CreateMessageAction(this.messageForm.value));
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
