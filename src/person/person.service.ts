import { Injectable } from '@nestjs/common';

import { Persion, Prisma } from '@prisma/client';
import { PrismaService } from '../service/prisma.service';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.PersionWhereUniqueInput,
  ): Promise<Persion | null> {
    return this.prisma.persion.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PersionWhereUniqueInput;
    where?: Prisma.PersionWhereInput;
    orderBy?: Prisma.PersionOrderByWithRelationInput;
  }): Promise<Persion[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.persion.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.PersionCreateInput): Promise<Persion> {
    return this.prisma.persion.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.PersionWhereUniqueInput;
    data: Prisma.PersionUpdateInput;
  }): Promise<Persion> {
    const { where, data } = params;
    return this.prisma.persion.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.PersionWhereUniqueInput): Promise<Persion> {
    return this.prisma.persion.delete({
      where,
    });
  }
}
