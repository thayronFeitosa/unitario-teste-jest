import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class migration2021150712LojaMatriz1626360898618 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'matriz',
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
            name: 'cnpj',
            type: 'varchar',
            length: '14',
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
    await queryRunner.createForeignKey('matriz', new TableForeignKey({
      columnNames: ['fk_user'],
      referencedColumnNames: ['id'],
      referencedTableName: 'user',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('matriz');
  }
}
