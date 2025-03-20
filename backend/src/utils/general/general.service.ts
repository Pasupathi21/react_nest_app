import { Injectable } from '@nestjs/common'

export class GeneralService {
    constructor(){}

    get_current_timestamp() {
        return Date.now()
    }

}