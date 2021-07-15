import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class migration2021150714UserComun1626360984641 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'userComun',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '11',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'telephone',
            type: 'varchar',
            length: '14',
            isNullable: true,

          },
          {
            name: 'email',
            type: 'varchar',
            length: '200',
            isUnique: true,
            isNullable: true,

          },
          {
            name: 'fk_user',
            type: 'integer',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey('userComun', new TableForeignKey({
      columnNames: ['fk_user'],
      referencedColumnNames: ['id'],
      referencedTableName: 'user',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('userComun');
  }
}
