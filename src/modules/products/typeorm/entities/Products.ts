import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('products')
class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column()
    name: String

    @Column('decimal')
    price: number

    @Column('int')
    quantity: number

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date




    




}



export default Product