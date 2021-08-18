import { ConvertToSpacesPipe } from './convert-to-space.pipes';
import { FormsModule } from '@angular/forms';
import { StarComponet } from './star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StarComponet, ConvertToSpacesPipe],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, StarComponet, ConvertToSpacesPipe],
})
export class SharedModule {}
