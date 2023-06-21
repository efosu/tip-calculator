import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PsuedoInputComponent } from './psuedo-input/psuedo-input.component';
import { ReactiveFormsModule,  FormsModule} from '@angular/forms';
import { NoFinityPipe } from './no-finity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PsuedoInputComponent,
    NoFinityPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
