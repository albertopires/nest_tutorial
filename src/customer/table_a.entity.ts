import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Table_a {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
