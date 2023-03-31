import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListComponent } from './list/list.component';
import { IconComponent } from './icon/icon.component';
import { GggComponent } from './ggg/ggg.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    ListComponent,
    IconComponent,
    GggComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
