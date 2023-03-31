import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
