import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DropdownComponent, ListComponent],
  exports: [DropdownComponent, ListComponent],
})
export class SharedModule {}
