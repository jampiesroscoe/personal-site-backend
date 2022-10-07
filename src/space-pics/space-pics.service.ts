import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SpacePicsService {
  constructor(private readonly httpService: HttpService) {}
  async getSpacePics() {
    const url =
      'https://api.nasa.gov/planetary/apod?api_key=cPaYSeWT3XOg1llqwlYfh32HLPRz9FDroUlzzYXg';
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }
}
