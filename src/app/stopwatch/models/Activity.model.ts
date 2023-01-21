import { Uuid } from '@helpers/Uuid';

export interface Activity {
    uuid : Uuid
    description: string
    time: number //seconds
    active: boolean
}