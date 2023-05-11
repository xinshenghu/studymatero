import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class AbcTest1Component implements OnInit {
  value = 1e21 + 1e2;
  constructor() { }

  ngOnInit() {
  }
  a() {

    const input = "1.23e10";
    const scientificNotationRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)$/;
    const match = input.match(scientificNotationRegex);

    if (match) {
      // debugger
      const exponentPart = match[2];
      console.log(1 + exponentPart); // "+10"
    } else {
      console.log("Invalid scientific notation");
    }
  }
}
