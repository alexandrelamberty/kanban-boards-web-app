import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DropdownComponent, ListComponent, AlertComponent],
  exports: [DropdownComponent, ListComponent],
})
export class SharedModule {}
