import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class migration2021150711Users1626360868657 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'login',
            type: 'varchar',
            length: '100',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'registerDate',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'tokenPassword',
            type: 'varchar',
            length: '200',
            isNullable: true,
          },
          {
            name: 'recoverPasswordToken',
            type: 'varchar',
            length: '200',
            isNullable: true,

          },
          {
            name: 'fk_type_user',
            type: 'integer',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey('user', new TableForeignKey({
      columnNames: ['fk_type_user'],
      referencedColumnNames: ['id'],
      referencedTableName: 'typeUser',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('user');
  }
}
