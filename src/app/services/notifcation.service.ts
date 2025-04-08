import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifcationService {

  constructor() { }

  showError(message: string) {
    // Peut être remplacé par Angular Material, ngx-toastr, etc.
    alert(message); // ici simple alert pour l’exemple
  }
}
