import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity("config")
export class ConfigEntity {
    @ObjectIdColumn()
    id: ObjectId;

    @Column("guild_id")
    guildId: string;

    @Column("trusted_role")
    trustedRole: string = null;

    @Column("permission_levels")
    permissionLevels: {
        [key: string]: number;
    } = {};

    @Column("level_role")
    levelRole: {
        [key: string]: number;
    } = {};
}