import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GcService } from '../gc.service';

@Component({
  selector: 'app-gc-creat',
  templateUrl: './gc-creat.component.html',
  styleUrls: ['./gc-creat.component.scss']
})
export class GcCreatComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private router: Router,
    private gcService: GcService) { }

  public gcForm: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.gcForm = this.fb.group({
      nameGc: ['', Validators.required],
      address: ['', Validators.required],
      leader: ['', Validators.required],
      host: ['', Validators.required],
      disciplic: ['', Validators.required]
    })
    console.log(this.gcForm)
  }

  public creatGc() {
    this.gcService.create(this.gcForm.value).subscribe(() => {
      this.router.navigate(["/"])
    })
    
  }

}
