import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberModel } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.scss']
})
export class MemberUpdateComponent implements OnInit {

  public memberForm: FormGroup = this.fb.group({});
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
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.memberService.readById(id).subscribe((member) => {
      this.memberModel = member;    
    });
    
    this.memberForm = this.fb.group({
      gc: ['', Validators.required],
      bday: ['', Validators.required],
      name: [ '', Validators.required],
      address: ['', Validators.required],
      whatsApp: ['', Validators.required]
    });
    
  }

  public updateMember(): void {
    this.memberModel.gc = this.selectedValue;
    this.memberService.update(this.memberModel).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

  public cancel() {
    this.router.navigate(['/'])
  }

}
