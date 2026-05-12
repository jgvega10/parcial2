import { Controller, Get, Query } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { EngagementQueryDto } from './dto/engagement-query.dto';
import { CpmQueryDto } from './dto/cpm-query.dto';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get('engagement')
  engagement(@Query() q: EngagementQueryDto) {
    return this.metricsService.engagement(q.likes, q.comments, q.followers);
  }

  @Get('cpm')
  cpm(@Query() q: CpmQueryDto) {
    return this.metricsService.cpm(q.cost, q.impressions);
  }
}