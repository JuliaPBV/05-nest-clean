import { faker } from "@faker-js/faker";
import { UniqueEntityID } from "@/core/unique-entity-id";
import {
  Question,
  QuestionProps,
} from "@/domain/forum/entreprise/entities/question";

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityID,
) {
  const question = Question.create(
    {
      authorId: new UniqueEntityID(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  );

  return question;
}
