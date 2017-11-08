import { TestBed, inject } from '@angular/core/testing';

import { TreeValidatorService } from './tree-validator.service';

describe('TreeValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeValidatorService]
    });
  });

  it('should be created', inject([TreeValidatorService], (service: TreeValidatorService) => {
    expect(service).toBeTruthy();

    let tree1 = {
      "left": {
        "left": 1,
        "right": {
          "left": 5,
          "right": 2
        }
      },
      "right": {
        "left": 1,
        "right": {
          "left": 7,
          "right": {
            "left": 1,
            "right": {
              "left": 9,
              "right": {
                "left": 1,
                "right": {
                  "left": 4,
                  "right": 2
                }
              }
            }
          }
        }
      }
    };
    let isValid = TreeValidatorService.validTree(tree1);
    expect(isValid).toBeTruthy();
    expect(TreeValidatorService.sumTree(tree1)).toEqual(33);
    let tree2 = {
      "left": {
        "left": 1,
        "right": {
          "left": 7,
          "right": 2
        }
      },
      "right": {
        "left": 1,
        "right": {
          "left": 5,
          "right": {
            "left": 1,
            "right": {
              "left": 9,
              "right": {
                "left": 1,
                "right": {
                  "left": 4,
                  "toto": 2
                }
              }
            }
          }
        }
      }
    };
    isValid = TreeValidatorService.validTree(tree2);

    expect(isValid).toBeFalsy();


  }));
});
