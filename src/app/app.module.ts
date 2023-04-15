import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/pipe/summary.pipe';
import { FilesizePipe } from './shared/pipe/filesize.pipe';
import { FormsModule } from '@angular/forms';
import { FilterplayersPipe } from './shared/pipe/filterplayers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FilesizePipe,
    FilterplayersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
