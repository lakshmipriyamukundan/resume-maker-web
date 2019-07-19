import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

interface ResumeData {
  name: string;
  email: string;
  experience: string;
  phone: string;
}

@Injectable()
export class ResumeService {
  constructor(private http: HttpClient) {}
  getResume() {
    return this.http.get('http://localhost:7000/v1/resume/get');
  }

  /** POST: add a new hero to the database */
  addResume(resumeData: ResumeData): Observable<ResumeData> {
    return this.http.post<ResumeData>(
      'http://localhost:7000/v1/resume/save',
      resumeData,
      httpOptions,
    );
  }
}
