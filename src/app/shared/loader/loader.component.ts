import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { getLoaderState } from '../../reducers/messages/messages.selectors';
import { IState } from '../../reducers';

@Component({
  standalone: true,
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  imports: [CommonModule],
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  public isLoader$ = this.store.select(getLoaderState);
  constructor(private store: Store<IState>) {
  }
}
