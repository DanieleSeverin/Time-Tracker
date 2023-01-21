import { Injectable } from '@angular/core';

export enum Keys{
  Activities = 'Activities'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: Keys): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  set(key: Keys, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: Keys): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
