import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [
    ResetComponent
  ],
  imports: [CommonModule, SharedModule],
})
export class UserModule {}
