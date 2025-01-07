import { PaginationsParams } from '@/core/repositories/pagination-params'
import { AnswerComment } from '../../entreprise/entities/answer-comment'
import { CommentWithAuthor } from '../../entreprise/entities/value-objects/comment-with-author'

export abstract class AnswerCommentsRepository {
  abstract findById(id: string): Promise<AnswerComment | null>

  abstract findManyByAnswerId(
    answerId: string,
    params: PaginationsParams,
  ): Promise<AnswerComment[]>

  abstract findManyByAnswerIdWithAuthor(
    answerId: string,
    params: PaginationsParams,
  ): Promise<CommentWithAuthor[]>

  abstract create(answerComment: AnswerComment): Promise<void>
  abstract delete(answerComment: AnswerComment): Promise<void>
}
