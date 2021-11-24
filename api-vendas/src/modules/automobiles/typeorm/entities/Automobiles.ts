import { Column, CreateDateColumn, Entity,PrimaryGeneratedColumn } from "typeorm"


@Entity('automobiles')
class Automobile {

    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column()
    ano: Number

    @Column()
    modelo: string

    @Column()
    marca: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

}



export default Automobile