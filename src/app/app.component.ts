import { Component } from '@angular/core';

import { TreeValidatorService } from './tree-validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tree validator';
  value : string;
  isJsonValid : boolean;
  jsonSum : number;

  constructor() {
    this.value = '{ \"left\" : 0 , \"right\" : 1}';
    this.isJsonValid = TreeValidatorService.validTree(JSON.parse(this.value));
  }

  private isValid() {
    this.isJsonValid = TreeValidatorService.validTree(JSON.parse(this.value));
  }
}
