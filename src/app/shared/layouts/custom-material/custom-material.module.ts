import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule, 
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatChipsModule,
  MatExpansionModule,
  MatGridListModule,
  MatTabsModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class CustomMaterialModule {}