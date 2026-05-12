import { Injectable } from '@nestjs/common';

@Injectable()
export class MetricsService {
  engagement(likes: number, comments: number, followers: number) {
    const rate = ((likes + comments) / followers) * 100;
    return { rate };
  }

  cpm(cost: number, impressions: number) {
    const cpm = (cost / impressions) * 1000;
    return { cpm };
  }
}