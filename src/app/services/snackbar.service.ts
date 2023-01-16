import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

import { SnackbarComponent } from "../shared/snackbar/snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private snackBarCustomData: MatSnackBarConfig = {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000,
  }

  constructor(private snackbarService: MatSnackBar) {
  }

  openSuccessSnackBar(message: string): void {
    this.snackbarService.openFromComponent(SnackbarComponent, {
      ...this.snackBarCustomData,
      panelClass: 'success-snackbar',
      data: { message }
    });
  }

  openErrorSnackBar(message: string): void {
    this.snackbarService.openFromComponent(SnackbarComponent, {
      ...this.snackBarCustomData,
      panelClass: 'error-snackbar',
      data: { message }
    });
  }
}
