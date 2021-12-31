import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragdropsComponent } from './dragdrops/dragdrops.component';
import { DragdropsHeaderComponent } from './dragdrops-header/dragdrops-header.component';
import { DragdropsListComponent } from './dragdrops-list/dragdrops-list.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

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
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule
  ],
  exports: [DragDropModule]
})
export class DragdropModule { }
