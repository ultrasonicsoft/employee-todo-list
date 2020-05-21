import { PriorityStatus } from './priority-status.enum';
import { States } from './states.enum';

export class TodoModel {
    id: string;
    employeeId: string;
    title: string;
    description: string;
    priority: PriorityStatus;
    state: States;
    estimate: Date;
}
