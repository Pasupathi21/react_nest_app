import { ClassConstructor, plainToInstance, } from 'class-transformer'
export class ResponseMapper {
    constructor() {}

    mapper<T>(classDto:  ClassConstructor<T>, data: Record<string, unknown> | Record<string, unknown>[]): T {
       const mappedResponse = plainToInstance(classDto, data, {
            excludeExtraneousValues: true
        })
        return mappedResponse
    }
}