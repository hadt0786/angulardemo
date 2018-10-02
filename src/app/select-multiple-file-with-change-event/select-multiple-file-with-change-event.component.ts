import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-multiple-file-with-change-event',
  templateUrl: './select-multiple-file-with-change-event.component.html',
  styleUrls: ['./select-multiple-file-with-change-event.component.css']
})
export class SelectMultipleFileWithChangeEventComponent implements OnInit {
  result: string;

  constructor() {}

  ngOnInit() {}

  save(event: any): void {
    const selectedFile = event.target.value;
    for (let i = 0; i < selectedFile.length; i++) {
      this.result += 'File Name ' + selectedFile.name;
      this.result += '<br>File size ' + selectedFile.size;
      this.result += '<br>File type ' + selectedFile.type;
      this.result += '<br>________________________________ ';
    }
  }
}
