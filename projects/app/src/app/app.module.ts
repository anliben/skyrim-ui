import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkyComponentsModule } from 'projects/ui/src/lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SkyComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
