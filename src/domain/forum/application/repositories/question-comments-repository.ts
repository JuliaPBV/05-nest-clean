import { PaginationsParams } from '@/core/repositories/pagination-params'
import { QuestionComment } from '../../entreprise/entities/question-comment'
import { CommentWithAuthor } from '../../entreprise/entities/value-objects/comment-with-author'

export abstract class QuestionCommentsRepository {
  abstract findById(id: string): Promise<QuestionComment | null>

  abstract findManyByQuestionId(
    questionId: string,
    params: PaginationsParams,
  ): Promise<QuestionComment[]>

  abstract findManyByQuestionIdWithAuthor(
    questionId: string,
    params: PaginationsParams,
  ): Promise<CommentWithAuthor[]>

  abstract create(questionComment: QuestionComment): Promise<void>
  abstract delete(questionComment: QuestionComment): Promise<void>
}
