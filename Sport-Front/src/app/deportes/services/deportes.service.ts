import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Deporte } from '../models/deporte.model';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiURL;
const deportes = '/deportes';

@Injectable()
export class DeportesService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getDeportes(): Observable<Deporte[]> {
        return this.http.get<Deporte[]>(API_URL + deportes);
    }
}
