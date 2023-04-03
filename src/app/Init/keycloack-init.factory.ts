import { KeycloakService } from 'keycloak-angular';


export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://192.168.1.203:8081',
          realm: 'Software',
          clientId: 'frontend'
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false
           // window.location.origin + '/assets/silent-check-sso.html'
        }
      });
  }