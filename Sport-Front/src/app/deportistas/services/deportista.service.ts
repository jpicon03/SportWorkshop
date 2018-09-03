import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Deportista } from '../models/deportista.model';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiURL;
const deportistas = '/deportistas';

@Injectable()
export class DeportistaService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getDeportistas(): Observable<Deportista[]> {
        return this.http.get<Deportista[]>(API_URL + deportistas);
    }
}
