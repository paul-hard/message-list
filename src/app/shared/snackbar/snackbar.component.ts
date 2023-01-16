import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarModule,
  MatSnackBarRef
} from '@angular/material/snack-bar';

interface ISnackBarData {
  message: string,
}
@Component({
  standalone:true,
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  imports: [MatSnackBarModule]
})
export class SnackbarComponent implements OnInit{

  public message: string = '';

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) private data: ISnackBarData,
    private snackBarRef: MatSnackBarRef<SnackbarComponent>
  ) {
  }

  ngOnInit(): void {
    this.message = this.data.message;
  }

  public closeSnackBar(): void {
    this.snackBarRef.dismiss();
  }
}
