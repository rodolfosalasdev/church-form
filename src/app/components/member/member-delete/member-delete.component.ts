import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberModel } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.scss']
})
export class MemberDeleteComponent implements OnInit {

  public memberForm: FormGroup = this.fb.group({});
  public member: Array<MemberModel> = []
  public memberModel: MemberModel = {
    id: undefined,
    name: '',
    address: '',
    whatsApp: '',
    bday: '',
    gc: ''
  };

  public optionGc = [
    {name: 'Selecione seu GC', value: '-'},
    {name: 'Bethel', value: 'Bethel'},
    {name: 'Huios', value: 'Huios'},
    {name: '3:16', value: '3:16'},
  ]
  selectedValue = '';

    constructor(private memberService: MemberService,
      private router: Router, 
      private route: ActivatedRoute,
      private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.memberService.readById(id).subscribe((member) => {
      this.memberModel = member;    
    });

    this.memberForm = this.fb.group({
      name: [ '', Validators.required],
      address: ['', Validators.required],
      whatsApp: ['', Validators.required],
      bday: ['', Validators.required],
      gc: ['']
    });
  }

  public deleteMember() {
    this.memberService.delete(Number(this.memberModel.id)).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  public cancel() {
    this.router.navigate(['/']);
  }

}
