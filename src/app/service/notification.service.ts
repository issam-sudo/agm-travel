import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {

  }


  showInfo(message: string, title: any) {
    this.toastr.info(message, title)
  }

  clearNotiifcation() {
    this.toastr.clear()
  }
}
