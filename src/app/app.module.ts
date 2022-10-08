import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './user/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './user/auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { CanvasComponent } from './canvas/canvas.component';
import { ToolsbarComponent } from './toolsbar/toolsbar.component';
import { CanvaComponent } from './canva/canva.component';
import { AngularSplitModule } from 'angular-split';
import { SideTemplatesComponent } from './side-templates/side-templates.component';
import { UploadAssetComponent } from './upload-asset/upload-asset.component';
import { SidePalleteComponent } from './side-pallete/side-pallete.component';
import { SideBrandsComponent } from './side-brands/side-brands.component';
import { CanvasToolbarComponent } from './canvas-toolbar/canvas-toolbar.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AuthComponent,
    CanvasComponent,
    ToolsbarComponent,
    CanvaComponent,
    SideTemplatesComponent,
    UploadAssetComponent,
    SidePalleteComponent,
    SideBrandsComponent,
    CanvasToolbarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularSplitModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:3000',
    }),
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
