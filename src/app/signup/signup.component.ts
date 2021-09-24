import { HttpClient } from '@angular/common/http';
import { analyzeNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 public signupform! :FormGroup;

  constructor(private formbuldier : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
this.signupform = this.formbuldier.group({
  fullname:[''],
  email:[''],
  password:[''],
  mobile:['']
})
  }

  signup(){
    this.http.post<any>("http://localhost:3000/signup",this.signupform.value)
    .subscribe(resp=>{
      alert("signup successfull");
      this.signupform.reset();
      this.router.navigate(['login'])
},err=>{
  alert("Somthing Went wrong")
}
)
  }
}
