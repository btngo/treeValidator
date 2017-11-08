import { Injectable } from '@angular/core';

@Injectable()
export class TreeValidatorService {

  constructor() { }

  static validTree(tree) : boolean {
    let keys = Object.keys(tree);
    if (keys.length != 2 ||
      keys.indexOf('right') == -1 ||
      keys.indexOf('left') == -1) {
      return false;
    }

    if (typeof tree.left === 'number') {
      if (typeof tree.right === 'number') {
        return true;
      }
      return this.validTree(tree.right);
    }

    if (typeof tree.right === 'number') {
      if (typeof tree.left === 'number') {
        return true;
      }
      return this.validTree(tree.left);
    }

    if (typeof tree.left === 'object' && typeof tree.left === 'object') {
      return this.validTree(tree.right) && this.validTree(tree.left);
    }

    return false;
  }

  static sumTree(tree, value?) : number {
    let sum = value || 0 ;
    let keys = Object.keys(tree);
    if (keys.length != 2 ||
      keys.indexOf('right') == -1 ||
      keys.indexOf('left') == -1) {
      return value;
    }

    if (typeof tree.left === 'number') {
      sum += tree.left;
      if (typeof tree.right === 'number') {
        return sum += tree.right;
      }
      return this.sumTree(tree.right, sum);
    }

    if (typeof tree.right === 'number') {
      sum += tree.right;
      if (typeof tree.left === 'number') {
        return sum += tree.left;
      }
      return this.sumTree(tree.left, sum);
    }

    if (typeof tree.left === 'object' && typeof tree.left === 'object') {
      return this.sumTree(tree.right, sum) + this.sumTree(tree.left, sum) ;
    }

    return sum;
  }

}
