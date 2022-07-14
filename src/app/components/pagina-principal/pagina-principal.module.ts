import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { ReceboComponent } from './recebo/recebo.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';



@NgModule({
  declarations: [
    ComoFuncionaComponent,
    ReceboComponent,
    DetalhamentoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginaPrincipalModule { }
