import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gcModel } from '../../gc/gc.model';
import { GcService } from '../../gc/gc.service';
import { MemberModel } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-creat',
  templateUrl: './member-creat.component.html',
  styleUrls: ['./member-creat.component.scss']
})
export class MemberCreatComponent implements OnInit {

  public gc: Array<gcModel> = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private memberservice: MemberService,
    private gcService: GcService) { }

  public memberForm: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      whatsApp: ['', Validators.required],
      bday: ['', Validators.required],
      gc: ['']
    })
    console.log(this.memberForm)
  }

  public creatMember() {
    this.memberservice.create(this.memberForm.value).subscribe(() => {
      this.router.navigate(["/"])

    })
    console.log(this.memberForm.value);
  }

  public readGcInput() {
    this.gcService.read().subscribe((gc) => {
      this.gc = gc;
    })
  }

}
