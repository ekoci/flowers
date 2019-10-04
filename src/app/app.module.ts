import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormBuilder, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { ChartsModule } from 'ng2-charts';
import {
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-router.module';
import { SidebarModule } from 'ng-sidebar';
import {AllDataComponent} from './all-data/general/general.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {OrdersComponent} from './all-data/orders/orders.component';
import {ContactsComponent} from './all-data/contacts/contacts.component';
import {ItemDialogComponent} from './all-data/general/item-dialog/item-dialog.component';
import {SalespeopleComponent} from './all-data/salespeople/salespeople.component';
import { HeaderComponent } from './login/header/header.component';
import { ContentComponent } from './login/content/content.component';
import {LoginDialogComponent} from './login/login-dialog/login-dialog.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AllDataComponent,
    ToolbarComponent,
    OrdersComponent,
    ContactsComponent,
    ItemDialogComponent,
    SalespeopleComponent,
    FileSelectDirective,
    HeaderComponent,
    ContentComponent,
    LoginDialogComponent


  ],
  entryComponents: [
    ItemDialogComponent,
    LoginDialogComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSidenavModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    SidebarModule.forRoot(),
    ScrollDispatchModule,
    ChartsModule
  ],
  providers: [FormBuilder, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
