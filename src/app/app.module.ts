import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { HeaderComponent } from './exercise1/header/header.component';
import { ContentComponent } from './exercise1/content/content.component';
import { SidebarComponent } from './exercise1/sidebar/sidebar.component';
import { FooterComponent } from './exercise1/footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
//@NgModule: decorator
//các option trong decorator được gọi là metadata
@NgModule({
  declarations: [
    // nơi khai báo tất cả component đc quản lý bởi module này
    AppComponent,
    Exercise1Component,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    DataBindingComponent
  ],
  imports: [
    // nơi khai báo những module đc sử dụng trong module này
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // nơi khai báo service  
  ],
  bootstrap: [
    //nơi khai báo component chạy đầu tiên trong module này
    AppComponent]
})
export class AppModule { }
