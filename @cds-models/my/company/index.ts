// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../_';

export function _UserAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class User extends Base {
    declare ID?: __.Key<string>
    declare name?: string | null
    declare email?: string | null
    declare documentId?: string | null
    declare birthDate?: __.CdsDate | null
    declare gender?: string | null
    declare phone?: string | null
    declare role?: __.Association.to<Role> | null
    declare role_ID?: string | null
    declare seniority?: __.Association.to<Seniority> | null
    declare seniority_ID?: string | null
    declare manager?: __.Association.to<User> | null
    declare manager_ID?: string | null
    declare isActive?: boolean | null
    declare createdAt?: __.CdsTimestamp | null
    declare updatedAt?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<User>;
    declare static readonly elements: __.ElementsOf<User>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class User extends _UserAspect(__.Entity) {}
Object.defineProperty(User, 'name', { value: 'my.company.Users' })
Object.defineProperty(User, 'is_singular', { value: true })
export class Users extends Array<User> {$count?: number}
Object.defineProperty(Users, 'name', { value: 'my.company.Users' })

export function _RoleAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Role extends Base {
    declare ID?: __.Key<string>
    declare name?: string | null
    declare description?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Role>;
    declare static readonly elements: __.ElementsOf<Role>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Role extends _RoleAspect(__.Entity) {}
Object.defineProperty(Role, 'name', { value: 'my.company.Roles' })
Object.defineProperty(Role, 'is_singular', { value: true })
export class Roles extends Array<Role> {$count?: number}
Object.defineProperty(Roles, 'name', { value: 'my.company.Roles' })

export function _SeniorityAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Seniority extends Base {
    declare ID?: __.Key<string>
    declare name?: string | null
    declare level?: number | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Seniority>;
    declare static readonly elements: __.ElementsOf<Seniority>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Seniority extends _SeniorityAspect(__.Entity) {}
Object.defineProperty(Seniority, 'name', { value: 'my.company.Seniorities' })
Object.defineProperty(Seniority, 'is_singular', { value: true })
export class Seniorities extends Array<Seniority> {$count?: number}
Object.defineProperty(Seniorities, 'name', { value: 'my.company.Seniorities' })

export function _TeamAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Team extends Base {
    declare ID?: __.Key<string>
    declare name?: string | null
    declare description?: string | null
    declare leader?: __.Association.to<User> | null
    declare leader_ID?: string | null
    declare createdAt?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Team>;
    declare static readonly elements: __.ElementsOf<Team>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Team extends _TeamAspect(__.Entity) {}
Object.defineProperty(Team, 'name', { value: 'my.company.Teams' })
Object.defineProperty(Team, 'is_singular', { value: true })
export class Teams extends Array<Team> {$count?: number}
Object.defineProperty(Teams, 'name', { value: 'my.company.Teams' })

export function _TeamMemberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TeamMember extends Base {
    declare ID?: __.Key<string>
    declare user?: __.Association.to<User> | null
    declare user_ID?: string | null
    declare team?: __.Association.to<Team> | null
    declare team_ID?: string | null
    declare joinedAt?: __.CdsDate | null
    declare leftAt?: __.CdsDate | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TeamMember>;
    declare static readonly elements: __.ElementsOf<TeamMember>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class TeamMember extends _TeamMemberAspect(__.Entity) {}
Object.defineProperty(TeamMember, 'name', { value: 'my.company.TeamMembers' })
Object.defineProperty(TeamMember, 'is_singular', { value: true })
export class TeamMembers extends Array<TeamMember> {$count?: number}
Object.defineProperty(TeamMembers, 'name', { value: 'my.company.TeamMembers' })

export function _ProjectAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Project extends Base {
    declare ID?: __.Key<string>
    declare name?: string | null
    declare description?: string | null
    declare status?: string | null
    declare startDate?: __.CdsDate | null
    declare endDate?: __.CdsDate | null
    declare owner?: __.Association.to<User> | null
    declare owner_ID?: string | null
    declare team?: __.Association.to<Team> | null
    declare team_ID?: string | null
    declare createdAt?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Project>;
    declare static readonly elements: __.ElementsOf<Project>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Project extends _ProjectAspect(__.Entity) {}
Object.defineProperty(Project, 'name', { value: 'my.company.Projects' })
Object.defineProperty(Project, 'is_singular', { value: true })
export class Projects extends Array<Project> {$count?: number}
Object.defineProperty(Projects, 'name', { value: 'my.company.Projects' })

export function _AllocationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Allocation extends Base {
    declare ID?: __.Key<string>
    declare user?: __.Association.to<User> | null
    declare user_ID?: string | null
    declare project?: __.Association.to<Project> | null
    declare project_ID?: string | null
    declare roleInProject?: string | null
    declare startDate?: __.CdsDate | null
    declare endDate?: __.CdsDate | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Allocation>;
    declare static readonly elements: __.ElementsOf<Allocation>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Allocation extends _AllocationAspect(__.Entity) {}
Object.defineProperty(Allocation, 'name', { value: 'my.company.Allocations' })
Object.defineProperty(Allocation, 'is_singular', { value: true })
export class Allocations extends Array<Allocation> {$count?: number}
Object.defineProperty(Allocations, 'name', { value: 'my.company.Allocations' })

export function _SkillAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Skill extends Base {
    declare ID?: __.Key<string>
    declare name?: string | null
    declare category?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Skill>;
    declare static readonly elements: __.ElementsOf<Skill>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Skill extends _SkillAspect(__.Entity) {}
Object.defineProperty(Skill, 'name', { value: 'my.company.Skills' })
Object.defineProperty(Skill, 'is_singular', { value: true })
export class Skills extends Array<Skill> {$count?: number}
Object.defineProperty(Skills, 'name', { value: 'my.company.Skills' })

export function _UserSkillAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class UserSkill extends Base {
    declare ID?: __.Key<string>
    declare user?: __.Association.to<User> | null
    declare user_ID?: string | null
    declare skill?: __.Association.to<Skill> | null
    declare skill_ID?: string | null
    declare proficiency?: number | null
    declare lastUpdated?: __.CdsDate | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<UserSkill>;
    declare static readonly elements: __.ElementsOf<UserSkill>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class UserSkill extends _UserSkillAspect(__.Entity) {}
Object.defineProperty(UserSkill, 'name', { value: 'my.company.UserSkills' })
Object.defineProperty(UserSkill, 'is_singular', { value: true })
export class UserSkills extends Array<UserSkill> {$count?: number}
Object.defineProperty(UserSkills, 'name', { value: 'my.company.UserSkills' })

export function _TaskStatusAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TaskStatus extends Base {
    declare ID?: __.Key<string>
    declare code?: string | null
    declare label?: string | null
    declare order?: number | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TaskStatus>;
    declare static readonly elements: __.ElementsOf<TaskStatus>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class TaskStatus extends _TaskStatusAspect(__.Entity) {}
Object.defineProperty(TaskStatus, 'name', { value: 'my.company.TaskStatuses' })
Object.defineProperty(TaskStatus, 'is_singular', { value: true })
export class TaskStatuses extends Array<TaskStatus> {$count?: number}
Object.defineProperty(TaskStatuses, 'name', { value: 'my.company.TaskStatuses' })

export function _TaskAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Task extends Base {
    declare ID?: __.Key<string>
    declare title?: string | null
    declare description?: string | null
    declare status?: __.Association.to<TaskStatus> | null
    declare status_ID?: string | null
    declare priority?: string | null
    declare dueDate?: __.CdsDate | null
    declare project?: __.Association.to<Project> | null
    declare project_ID?: string | null
    declare createdBy?: __.Association.to<User> | null
    declare createdBy_ID?: string | null
    declare assignedTo?: __.Association.to<User> | null
    declare assignedTo_ID?: string | null
    declare createdAt?: __.CdsTimestamp | null
    declare updatedAt?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Task>;
    declare static readonly elements: __.ElementsOf<Task>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Task extends _TaskAspect(__.Entity) {}
Object.defineProperty(Task, 'name', { value: 'my.company.Tasks' })
Object.defineProperty(Task, 'is_singular', { value: true })
export class Tasks extends Array<Task> {$count?: number}
Object.defineProperty(Tasks, 'name', { value: 'my.company.Tasks' })

export function _TaskCommentAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TaskComment extends Base {
    declare ID?: __.Key<string>
    declare task?: __.Association.to<Task> | null
    declare task_ID?: string | null
    declare author?: __.Association.to<User> | null
    declare author_ID?: string | null
    declare comment?: string | null
    declare createdAt?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TaskComment>;
    declare static readonly elements: __.ElementsOf<TaskComment>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class TaskComment extends _TaskCommentAspect(__.Entity) {}
Object.defineProperty(TaskComment, 'name', { value: 'my.company.TaskComments' })
Object.defineProperty(TaskComment, 'is_singular', { value: true })
export class TaskComments extends Array<TaskComment> {$count?: number}
Object.defineProperty(TaskComments, 'name', { value: 'my.company.TaskComments' })

export function _TaskTagAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TaskTag extends Base {
    declare ID?: __.Key<string>
    declare name?: string | null
    declare color?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TaskTag>;
    declare static readonly elements: __.ElementsOf<TaskTag>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class TaskTag extends _TaskTagAspect(__.Entity) {}
Object.defineProperty(TaskTag, 'name', { value: 'my.company.TaskTags' })
Object.defineProperty(TaskTag, 'is_singular', { value: true })
export class TaskTags extends Array<TaskTag> {$count?: number}
Object.defineProperty(TaskTags, 'name', { value: 'my.company.TaskTags' })

export function _TaskTagMapAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TaskTagMap extends Base {
    declare ID?: __.Key<string>
    declare task?: __.Association.to<Task> | null
    declare task_ID?: string | null
    declare tag?: __.Association.to<TaskTag> | null
    declare tag_ID?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TaskTagMap>;
    declare static readonly elements: __.ElementsOf<TaskTagMap>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class TaskTagMap extends _TaskTagMapAspect(__.Entity) {}
Object.defineProperty(TaskTagMap, 'name', { value: 'my.company.TaskTagMap' })
Object.defineProperty(TaskTagMap, 'is_singular', { value: true })
export class TaskTagMap_ extends Array<TaskTagMap> {$count?: number}
Object.defineProperty(TaskTagMap_, 'name', { value: 'my.company.TaskTagMap' })

export function _TaskStatusHistoryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TaskStatusHistory extends Base {
    declare ID?: __.Key<string>
    declare task?: __.Association.to<Task> | null
    declare task_ID?: string | null
    declare fromStatus?: __.Association.to<TaskStatus> | null
    declare fromStatus_ID?: string | null
    declare toStatus?: __.Association.to<TaskStatus> | null
    declare toStatus_ID?: string | null
    declare changedBy?: __.Association.to<User> | null
    declare changedBy_ID?: string | null
    declare changedAt?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TaskStatusHistory>;
    declare static readonly elements: __.ElementsOf<TaskStatusHistory>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class TaskStatusHistory extends _TaskStatusHistoryAspect(__.Entity) {}
Object.defineProperty(TaskStatusHistory, 'name', { value: 'my.company.TaskStatusHistory' })
Object.defineProperty(TaskStatusHistory, 'is_singular', { value: true })
export class TaskStatusHistory_ extends Array<TaskStatusHistory> {$count?: number}
Object.defineProperty(TaskStatusHistory_, 'name', { value: 'my.company.TaskStatusHistory' })

export function _TeamCheckinAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TeamCheckin extends Base {
    declare ID?: __.Key<string>
    declare team?: __.Association.to<Team> | null
    declare team_ID?: string | null
    declare user?: __.Association.to<User> | null
    declare user_ID?: string | null
    declare mood?: number | null
    declare comment?: string | null
    declare checkinDate?: __.CdsDate | null
    declare createdAt?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TeamCheckin>;
    declare static readonly elements: __.ElementsOf<TeamCheckin>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class TeamCheckin extends _TeamCheckinAspect(__.Entity) {}
Object.defineProperty(TeamCheckin, 'name', { value: 'my.company.TeamCheckins' })
Object.defineProperty(TeamCheckin, 'is_singular', { value: true })
export class TeamCheckins extends Array<TeamCheckin> {$count?: number}
Object.defineProperty(TeamCheckins, 'name', { value: 'my.company.TeamCheckins' })

export function _TeamMoodWeeklyAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TeamMoodWeekly extends Base {
    declare teamID?: __.Key<string>
    declare weekStart?: __.Key<__.CdsDate>
    declare avgMood?: number | null
    declare totalEntries?: number | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TeamMoodWeekly>;
    declare static readonly elements: __.ElementsOf<TeamMoodWeekly>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class TeamMoodWeekly extends _TeamMoodWeeklyAspect(__.Entity) {}
Object.defineProperty(TeamMoodWeekly, 'name', { value: 'my.company.TeamMoodWeekly' })
Object.defineProperty(TeamMoodWeekly, 'is_singular', { value: true })
export class TeamMoodWeekly_ extends Array<TeamMoodWeekly> {$count?: number}
Object.defineProperty(TeamMoodWeekly_, 'name', { value: 'my.company.TeamMoodWeekly' })
