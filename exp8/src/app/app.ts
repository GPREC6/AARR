import { CommonModule } from '@angular/common'; 
import { HttpClient,HttpClientModule } from '@angular/common/http'; 
import { Component } from '@angular/core'; 
import { Observable } from 'rxjs'; 
@Component({ 
selector: 'app-root', 
imports: [CommonModule,HttpClientModule], 
templateUrl: './app.html', 
styleUrl: './app.css' 
}) 
export class App { 
users: Observable<any[]>;   
constructor(private http: HttpClient) { 
this.users = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'); 
} 
}