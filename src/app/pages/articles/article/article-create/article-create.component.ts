import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../core/service/article.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/service/auth.service';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

enum ContentType{
  text = 'text',
  file = 'file',
  checkbox = 'checkbox',
  url = 'url'
}

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css'
})
export class ArticleCreateComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(
    private service: ArticleService,
    private authservice: AuthService,
    private router: Router,
    private fb: FormBuilder
  ){ }

  ngOnInit(): void {
    const authorname = this.authservice.getDecodedToken().name;
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: [authorname],
      text: this.fb.array([])
    })
  }

  get Text(){
    return this.form.controls['text'] as FormArray;
  }

  get ContentEnumKeys(): string[]{
    return Object.keys(ContentType);
  }

  addContent(){
    const contentForm = this.fb.group({
      content: ['', Validators.required],
      type: [ContentType.text, this.enumValidator]
    });
    this.Text.push(contentForm);
  }
  
  deleteContent(id: number){
    this.Text.removeAt(id);
  }

  enumValidator(control: FormControl): ValidationErrors | null {
    const type = control.value;
    
    return Object.values(ContentType).includes(type) ? null : { notIncluded: true };
  }
 
  submitForm(): void{
    this.service.create(this.form.value).subscribe(
      ()=> {
        this.router.navigate(['/articles']);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        alert(error);
      }
    );
  }

  resizeTextArea(event: Event): void{
    const textarea = event.target as HTMLTextAreaElement
    if (textarea !== null){
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }
}
