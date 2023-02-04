import { Uuid } from '@helpers/Uuid';

export interface Activity {
    uuid : Uuid
    description: string
    total_time: number 
    staging_time?: number 
    last_start_time?: Date 
    active: boolean
}