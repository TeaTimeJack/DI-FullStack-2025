
import { Request, Response, NextFunction } from "express"

const authorize = (req: Request, res: Response, next: NextFunction) => {
  const { user } = req
  const { storyId } = req.params

  // Check if the user is the author of the story
  if (user.id !== story.author_id) {
    return res
      .status(403)
      .json({ message: "You are not authorized to perform this action." })
  }

  next()
}