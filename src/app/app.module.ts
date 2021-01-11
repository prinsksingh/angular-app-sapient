import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpacexLaunchProgramsComponent } from './spacex-launch-programs/spacex-launch-programs.component';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
    {
        path: '', component: SpacexLaunchProgramsComponent
    }
 ];

@NgModule({
  declarations: [
    AppComponent,
    SpacexLaunchProgramsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule, RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
