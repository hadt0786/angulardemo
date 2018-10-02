import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-file-with-change-event',
  templateUrl: './select-file-with-change-event.component.html',
  styleUrls: ['./select-file-with-change-event.component.css']
})
export class SelectFileWithChangeEventComponent implements OnInit {

  result = '';
  constructor() { }

  ngOnInit() {
  }

  save(event: any): void {
    const selectedFile = event.target.files[0];
    this.result = 'File Name: ' + selectedFile.name;
    this.result += 'File Size(bytes): ' + selectedFile.size;
    this.result += 'File type : ' + selectedFile.type;
  }

}
