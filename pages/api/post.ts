import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../utils/types';

export default (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    const { body }: { body: Post } = req;
    console.log(body);
  }

  res.status(200).json({ name: 'John Doe' });
}