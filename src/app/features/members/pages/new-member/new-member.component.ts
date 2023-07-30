import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {NgxMaskDirective} from 'ngx-mask';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {PageContentComponent} from '../../../../ui/page-content/page-content.component';
import {HeaderComponent} from '../../../../ui/header/header.component';
import {GrButtonComponent} from '../../../../ui/button/button.component';
import {StepperComponent} from '../../../../ui/stepper/stepper.component';
import {Step} from '../../../../ui/stepper/step';
import {FormControlComponent} from '../../../../ui/form-control/form-control.component';
import {cpfValidator} from '../../../../shared/validators/cpf.validator';
import {CardComponent} from '../../../../ui/card/card.component';
import {IconComponent} from '../../../../ui/icon/icon.component';
import {MembersService} from '../../services/members.service';
import {Member} from '../../models/member.model';
import {DocStatusPipe} from '../../pipes/doc-status.pipe';
import {AlertComponent} from '../../../../ui/alert/alert.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss'],
  standalone: true,
  imports: [
    PageContentComponent,
    HeaderComponent,
    GrButtonComponent,
    StepperComponent,
    FormControlComponent,
    NgxMaskDirective,
    ReactiveFormsModule,
    NgIf,
    CardComponent,
    IconComponent,
    DocStatusPipe,
    NgForOf,
    AlertComponent,
  ],
})
export class NewMemberComponent {
  public form: FormGroup = this._formBuilder.group({
    cpf: ['', [Validators.required, cpfValidator()]],
  });

  public steps: Step[] = [
    {
      label: 'Início',
    },
    {
      label: 'Documentos',
    },
    {
      label: 'Dados cadastrais',
    },
    {
      label: 'Admissão',
    },
  ];

  public member: Member | undefined;

  public alertError: {title: string; text: string} | undefined;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _membersService: MembersService,
  ) {}

  public onSubmit(): void {
    this._membersService.get(this.form.value).subscribe({
      next: (member: Member) => {
        this.member = member;
      },
      error: (error) => {
        if (error.status === 404) {
          this.alertError = {
            title: 'CPF não encontrado',
            text: 'O CPF informado não conta da base de dados utilizada para consulta. Verifique se o CPF está correto e tente novamente.',
          };
        }

        this.member = undefined;
      },
    });
  }

  public clearAlert(): void {
    this.alertError = undefined;
  }
}
