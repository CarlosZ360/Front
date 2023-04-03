import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  private keycloakService: KeycloakService
  title = 'ERROR';

  logout(){
    this.keycloakService.logout("http://localhost:4200")
  }
}

