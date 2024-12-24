import { PaginationsParams } from '@/core/repositories/pagination-params'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/entreprise/entities/answer-comment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  findById(id: string): Promise<AnswerComment | null> {
    throw new Error('Method not implemented.')
  }
  findManyByAnswerId(
    answerId: string,
    params: PaginationsParams,
  ): Promise<AnswerComment[]> {
    throw new Error('Method not implemented.')
  }
  create(answerComment: AnswerComment): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(answerComment: AnswerComment): Promise<void> {
    throw new Error('Method not implemented.')
  }
}