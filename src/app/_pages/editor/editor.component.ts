import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as DecoupledEditor  from '@ckeditor/ckeditor5-build-decoupled-document';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent implements OnInit {

  
  Editor = DecoupledEditor;
  toolbar: any = ['heading', '|', 'bold','blockQuote' ,
    'italic', 'fontSize', 'fontFamily', 'underline', 'strikethrough', 'alignment',
    'highlight', 'numberedList', 'insertTable',
    'bulletedList', '|', 'indent',
    'outdent', 'undo', 'redo', 'exportPdf', 'exportWord', 'uploadImage', 'fontBackgroundColor',
    'fontColor', 'link'];

heading = {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
    ]
  };



ngOnInit() {
    DecoupledEditor.create(document.querySelector('.document-editor__editable'), {
      fontSize: { options: [9, 11, 12, 13, 'default', 17, 19, 21] },
      toolbar: this.toolbar,
      heading: this.heading,
    }).then((editor: { ui: { view: { toolbar: { element: any; }; }; }; }) => {
      const toolbarContainer = document.querySelector('.document-editor__toolbar');
      toolbarContainer?.appendChild(editor.ui.view.toolbar.element);

      this.Editor = editor;
    }).catch((err: any) => {
      console.error(err);
    });
  }
  getData() {
    console.log("ckeditor html: ", this.Editor.getData());
  }

 setData() {
    let data: any = `<p>Hi everyone!</p>`;
    this.Editor.setData(data);
  }



  dirigirinicio() {
    window.location.reload();
  }

  title = 'reportdesignerapp';
  public serviceUrl: string | undefined;
  htmlContent = '';

  

  constructor(public router: Router) {
    
  }
 
}
