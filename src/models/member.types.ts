export interface Member {
  id: number;
  name: string;
  stars: number;
};

export interface AddMember extends Omit<Member, 'id'> { };

export type Members = Member[];
