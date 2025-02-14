import { AttachmentsRepository } from '@/domain/forum/application/repositories/attachments.repository'
import { Attachment } from '@/domain/forum/entreprise/entities/attachment'

export class InMemoryAttachmentsRepository implements AttachmentsRepository {
  public items: Attachment[] = []

  async create(attachment: Attachment) {
    this.items.push(attachment)
  }
}
