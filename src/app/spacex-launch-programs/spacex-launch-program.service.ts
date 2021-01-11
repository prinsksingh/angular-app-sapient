import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SpacexLaunchProgramService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    /**
     * Get all programs
     */
    getAllPrograms(): Observable<any> {
        return this.http.get(`${this.baseUrl}launches?limit=100`, {});
    }

    /**
     * Get Filter programs
     */
    getCommonFilter(year, launchFlag, LandingFlag): Observable<any> {
        if (year) {
            return this.http.get(`${this.baseUrl}launches?limit=100&launch_success=${launchFlag}&land_success=${LandingFlag}&launch_year=${year}`, {});
        } else {
            return this.http.get(`${this.baseUrl}launches?limit=100&launch_success=${launchFlag}&land_success=${LandingFlag}`, {});
        }
    }
}

