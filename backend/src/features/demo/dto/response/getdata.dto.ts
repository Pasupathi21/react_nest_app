import { Expose, Exclude, Type } from 'class-transformer'


@Exclude()
export class MilestonesDto {
    @Expose() name: string;

    @Type(() => Date)
    @Expose() due: Date;

    @Expose() status: string
} 

@Exclude()
export class TimelineDto {
    @Type(() => Date)
    @Expose() start: Date;

    @Type(() => Date)
    @Expose() end: Date

    @Type(() => MilestonesDto)
    @Expose() milestones: MilestonesDto[]
}

@Exclude()
export class BudgetDto {
    @Expose() currency: string;
    @Expose() amount: number;
    @Expose() spent: number
}

@Exclude()
export class MetaDataDto {
    @Expose() tags: string[]

    @Type(() => BudgetDto)
    @Expose() budget: BudgetDto

    @Type(() => TimelineDto)
    @Expose() timeline: TimelineDto
}

@Exclude()
export class GetDataDto {
    @Expose() id: string;
    @Expose() name: string
    
    @Type(() => Date)
    @Expose() createdAt: Date
    
    @Expose()
    @Type(() => MetaDataDto)
    metadata: MetaDataDto

}

@Exclude()
export class GetDataList {
    @Type(() => GetDataDto)
    @Expose() projects: GetDataDto[]
}