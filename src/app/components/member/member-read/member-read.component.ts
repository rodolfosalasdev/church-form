import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-read',
  templateUrl: './member-read.component.html',
  styleUrls: ['./member-read.component.scss']
})
export class MemberReadComponent implements OnInit {

  public member: Array<MemberModel> = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.read().subscribe(member => {
      this.member = member;
    })
  }

  public edit() {
    console.log("editar");
  }

  public delete() {
    console.log("Excluído");
    
  }

}
