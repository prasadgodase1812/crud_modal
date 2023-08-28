import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CrudserviceService } from 'src/app/service/crudservice.service';
import { loginInterface } from './interfaces/login';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  Show!: boolean;
  Update!: boolean;

  //storer interface here
  _crudInterface: loginInterface = new loginInterface();

  constructor(
    private fb: FormBuilder,
    private _crudservice: CrudserviceService,
    private _toasterService:ToastrService
  ) {
    this._getData();

  }


  _loginForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    city: ['', [Validators.required]],
    pin: ['', [Validators.required]],
  });

  Datas: any;

  add() {
    this.Show = true;
    this.Update = false;
  }
  _getData() {
    this._crudservice.getData().subscribe((user) => {
      this.Datas = user;
    });
  }

  _userData() {
    this._crudservice
      .displayUser(this._loginForm.value)
      .subscribe((userDisplay) => {
        this._getData();
        this._loginForm.reset();
      });
  }

  _deleteData(id: any) {
    this._crudservice.deleteD(id).subscribe((res) => {
      this._getData();
    });
  }

  ActiveItem: any;

  _edit(data: any) {
    this.Show = false;
    this.Update = true;

    this._loginForm.patchValue({
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      city: data.city,
      pin: data.pin,
    });

    this._crudInterface = data;
  }

  _updateData() {
    this._crudInterface.name = this._loginForm.value.name;
    this._crudInterface.email = this._loginForm.value.email;
    this._crudInterface.mobile = this._loginForm.value.mobile;
    this._crudInterface.city = this._loginForm.value.city;
    this._crudInterface.pin = this._loginForm.value.pin;

    this._crudservice
      .updateD(this._crudInterface, this._crudInterface.id)
      .subscribe((res) => {});
      this._toasterService.success('Updated SuccessFully','Done',{
        timeOut: 3000,
      });
    
  }
  
}
