import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient, HttpResponse, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { catchError, last, map, tap } from 'rxjs/operators';
import {FileUploadModel} from '../../models/file-uploaded-model';
import { of } from 'rxjs/internal/observable/of';
import { AuthService } from 'PetRescueFrontEnd/src/app/services/auth.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FileUploadComponent implements OnInit {
  @Input() text = 'Upload';
  @Input() param = 'file';
  @Input() target = 'http://localhost:8081/image/analize-image';
  @Input() accept = 'multipart/form-data';
  // tslint:disable-next-line:no-output-native
  @Output() complete = new EventEmitter<string>();
  fileInformation: any;
  FilesPets: Array<FileUploadModel> = [];

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient, private authService: AuthService) { }

  ngOnInit() {

    
  }

  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;

    fileUpload.onchange = () => {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.FilesPets.push({
          data: file,
          state: 'in',
          inProgress: false,
          progress: 0,
          canRetry: false,
          canCancel: true
        });
      }

      this.uploadFiles();
    };

    fileUpload.click();
  }

  cancelFile(file: FileUploadModel) {
    file.sub.unsubscribe();

    this.removeFileFromArray(file);
  }

  retryFile(file: FileUploadModel) {
    this.uploadFile(file);

    file.canRetry = false;
  }

  private uploadFile(file: FileUploadModel) {
    const fd = new FormData();
    fd.append(this.param, file.data);

    const req = new HttpRequest('POST', this.target, fd, {
      reportProgress: true
    });
    console.log('accediendo....');
    file.inProgress = false;
    file.sub = this._http.request(req).pipe(
      map(event => {
        switch (event.type) {
              case HttpEventType.UploadProgress:
                    file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
              case HttpEventType.Response:
                    return event;
        }
        console.log('No hay error....');
      }),
      tap(message => { }),
      last(),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        file.canRetry = true;
        console.log('Error', error);
        return of(`${file.data.name} upload failed.`);
      })
    ).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.removeFileFromArray(file);
          this.complete.emit(event.body);
        }
      }

      
    );
    console.log('accediendo 22....');
  }

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';

    this.FilesPets.forEach(file => {
      this.uploadFile(file);
    });
  }

  private removeFileFromArray(file: FileUploadModel) {
    const index = this.FilesPets.indexOf(file);

    if (index > -1) {
      this.FilesPets.splice(index, 1);
    }
  }
}