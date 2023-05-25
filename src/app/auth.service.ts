import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
   // Method to check if user is logged in
   isLoggedIn(): boolean {
    // Get the user token from localStorage
    const token = localStorage.getItem('token');

    // Check if the user token exists and is not expired
    if (token && new Date() < new Date(JSON.parse(atob(token.split('.')[1])).exp * 1000)) {
      return true;
    }

    return false;
  }
}
