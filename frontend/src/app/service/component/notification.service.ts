import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message:any, title:any){
    this.toastr.success(message, title, {
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-center',
    });
  }

  showWarning(message:any, title:any){
    this.toastr.warning(message, title, {
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-center'
    });
  }

  showError(message:any, title:any){
    this.toastr.error(message, title, {
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-center'
    });
  }

  showInfo(message:any, title:any){
    this.toastr.info(message, title, {
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-center'
    });
  }
}
