import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragdropsComponent } from './dragdrops/dragdrops.component';
import { DragdropsHeaderComponent } from './dragdrops-header/dragdrops-header.component';
import { DragdropsListComponent } from './dragdrops-list/dragdrops-list.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    DragdropsComponent,
    DragdropsHeaderComponent,
    DragdropsListComponent,],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    DragDropModule,
    MatCheckboxModule
  ],
  exports: [DragDropModule]
})
export class DragdropModule { }
